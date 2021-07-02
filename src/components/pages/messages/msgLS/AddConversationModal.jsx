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
import { Get, Post, Put } from '../../../../utils/requests';
import { addConversationToConversationsArr, updateConversationsArr } from '../../../../redux/actions/views/MessagesActions';
// components
import ModalSelectedMembers from '../ModalSelectedMembers';
import Factory from '../../startups/startupDetail/Factory';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  AddConversationModal: {
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
const clickCloseAddConvo = isOpenSet => () => isOpenSet(false);
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
const clickAddMembers = (stagedProfiles, activeProfileId, dispatch, isOpenSet) => async e => {
  try {
    const url = `${window.env.api.conversations}`;
    const part = [...new Set([...stagedProfiles.map(p => p._id)])];
    const body = {
      participants: part,
      activeProfileId,
    };
    const { response, error } = await Post(url, body);
    if (error) throw error;
    dispatch(addConversationToConversationsArr(response));
    isOpenSet(false);
  } catch (err) {
    console.log(err)
  }
};

/**
 * main
 */
const AddConversationModal = ({ isOpen, isOpenSet }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const xxx = useSelector(s => s.view.messages);
  // console.log('xxx', xxx)
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const [text, textSet] = useState('');
  const [connections, connectionsSet] = useState([]);
  const [filteredConnections, filteredConnectionsSet] = useState(connections);
  const [selectedProfiles, selectedProfilesSet] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  useEffect(() => {
    const selectedIdsArr = selectedProfiles.map(profile => profile._id);
    const filteredIds = [];
    const filteredProfiles = [];
    for (let idx = 0; idx < connections.length; idx += 1) {
      const profile = connections[idx];
      if (!selectedIdsArr.includes(profile._id) && !filteredIds.includes(profile._id)) {
        filteredIds.push(profile._id);
        filteredProfiles.push(profile);
      }
    }
    filteredConnectionsSet(filteredProfiles);
    textSet('');
  }, [connections.length, selectedProfiles.length]);
  
  // effects
  useEffect(async () => {
    // load all personal connections
    const url = `${window.env.api.profiles}/connections/${activeProfileId}`;
    try {
      const connectionsRes = await Get(url);
      connectionsSet(connectionsRes);
    } catch (err) {
      console.log(err);
    }
    if (!isOpen) {
      filteredConnectionsSet(connections);
    }
  }, [activeProfileId, isOpen]);
  // console.log(filteredConnections)
  return filteredConnections.length > 0 ? (
    <Modal
      open={isOpen}
      onClose={clickCloseAddConvo(isOpenSet)}
    >
      <div className={`${classes.AddConversationModal}`} style={modalStyle}>
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
                <Button className={`${classes.addButton} w100`} onClick={clickAddMembers(selectedProfiles, activeProfileId, dispatch, isOpenSet)} variant="outlined" disabled={selectedProfiles.length === 0}>Add members</Button>
              </div>
              <ModalSelectedMembers
                selectedProfiles={selectedProfiles}
                selectedProfilesSet={selectedProfilesSet}
              />
            </div>
        </Factory>
      </div>
    </Modal>
  ) : <div></div>;
};

// export
export default AddConversationModal;
