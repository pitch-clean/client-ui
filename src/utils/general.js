export const slugify = (string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(' ', '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace('&', '-and-') // Replace & with 'and'
    .replace(/\W/g, '') // Remove all non-word characters
    .replace('----', '-').replace('---', '-').replace('--', '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const onChangePdf = (e, pdfFileSet) => {
  console.log(e.target.files)
  let filesArr = [...e.target.files];
  let formattedFilesArr = [];

  // check filesize, prevent anything over 10MB
  let mbLimit = 10;
  let byteLimit = mbLimit * 1000000;
  for (let idx = 0; idx < filesArr.length; idx += 1) {
    const imgObj = filesArr[idx];
    const {
      name, size: fileSize, type
    } = imgObj;
    console.log('file', imgObj)
    if (fileSize > byteLimit) {
      alert("Please select files under 10MB");
      return;
    }
    let reader = new FileReader();
    reader.onloadend = () => {
      formattedFilesArr.push({
        preview: reader.result,
        file: imgObj,
      });
      pdfFileSet(() => {return [...formattedFilesArr]});
    };
    reader.readAsDataURL(imgObj);
  }
};
