// react
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Modal,
  Button,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Get, Put } from '../../../../utils/requests';
import { updateActiveConversationParticipants } from '../../../../redux/actions/views/MessagesActions';
// components
import ModalSelectedMembers from './ModalSelectedMembers';
import Factory from '../../startups/startupDetail/Factory';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  modal: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: 500,
    top: `30%`,
    left: `50%`,
    transform: `translate(-50%, 0%)`,
  },
  modalBody: {
    justifyContent: 'space-between',
    paddingTop: 20,
    width: '85%',
  },
  modalLeft: {
    alignSelf: 'start',
  },
  addButton: {
    backgroundColor: `#e3f2eb`,
  },
}));
// fxns
const clickCloseAddMember = isOpenSet => () => isOpenSet(false);
const getModalStyle = () => {
  return {
    top: `30%`,
    left: `50%`,
    transform: `translate(-50%, -0%)`,
  };
};
const updateSelectedProfiles = (selectedProfiles, selectedProfilesSet, textSet) => (e, profile) => {
  textSet(e.target.value)
  profile && profile._id && selectedProfilesSet([...selectedProfiles, profile]);
};
const clickAddMembers = (stagedProfiles, conversationId, activeProfileId, dispatch) => async e => {
  try {
    const url = `${window.env.api.conversations}/participants`;
    const part = [...stagedProfiles.map(p => p._id), activeProfileId];
    const body = {
      conversationId,
      participants: [...new Set(part)],
    };
    const { response, error } = await Put(url, body);
    if (error) throw error;
    console.log(response);
    dispatch(updateActiveConversationParticipants(response));
  } catch (err) {
    console.log(err)
  }
};

/**
 * main
 */
const AddMemberModal = ({ isOpen, isOpenSet }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const activeConversationId = useSelector(s => s.view.messages.activeConversationObj._id);
  const participants = useSelector(s => s.view.messages.activeConversationObj.participants);
  const [text, textSet] = useState('');
  const [connections, connectionsSet] = useState([]);
  const [filteredConnections, filteredConnectionsSet] = useState(connections);
  const [selectedProfiles, selectedProfilesSet] = useState(participants);
  const [modalStyle] = useState(getModalStyle);
  // effects
  useEffect(async () => {
    const url = `${window.env.api.profiles}/connections/${activeProfileId}`;
    try {
      const connectionsRes = await Get(url);
      connectionsSet(connectionsRes);
    } catch (err) {
      console.log(err);
    }
    if (!isOpen) {
      filteredConnectionsSet(connections);
      selectedProfilesSet(participants);
    }
  }, [activeProfileId, isOpen]);
  useEffect(() => {
    const selectedIdsArr = selectedProfiles.map(profile => profile._id);
    const filteredIds = [];
    const filteredProfiles = [];
    for (let idx = 0; idx < [...connections, ...participants].length; idx += 1) {
      const profile = [...connections, ...participants][idx];
      if (!selectedIdsArr.includes(profile._id) && !filteredIds.includes(profile._id)) {
        filteredIds.push(profile._id);
        filteredProfiles.push(profile);
      }
    }
    filteredConnectionsSet(filteredProfiles);
    textSet('');
  }, [connections.length, selectedProfiles.length]);

  return filteredConnections.length > 0 ? (
    <Modal
      open={isOpen}
      onClose={clickCloseAddMember(isOpenSet)}
    >
      <div className={`AddMemberModal ${classes.modal}`} style={modalStyle}>
        <Factory
            componentName="AddMembers"
            title="Add Members to group"
            noEdit
          >
            <div className={`${classes.modalBody} flexrow`}>
              <div className={`${classes.modalLeft} flexcol`}>
                <Autocomplete
                  autoHighlight
                  filterSelectedOptions
                  blurOnSelect
                  clearOnBlur
                  selectOnFocus
                  value={text}
                  onChange={updateSelectedProfiles(selectedProfiles, selectedProfilesSet, textSet)}
                  options={filteredConnections}
                  getOptionLabel={profile => profile && `${profile.pii.firstName} ${profile.pii.lastName}`}
                  style={{ width: 300 }}
                  renderInput={p => <TextField {...p} label="Search for profiles" variant="outlined" />}
                />
                <Button className={`${classes.addButton} w100`} onClick={clickAddMembers(selectedProfiles, activeConversationId, activeProfileId, dispatch)} variant="outlined" disabled={selectedProfiles.length === 0}>Add members</Button>
              </div>
              <ModalSelectedMembers
                selectedProfiles={selectedProfiles}
                selectedProfilesSet={selectedProfilesSet}
              />
            </div>
        </Factory>
          {/* <GeneralInfo /> */}
      </div>
    </Modal>
  ) : <div></div>;
};

// export
export default AddMemberModal;
