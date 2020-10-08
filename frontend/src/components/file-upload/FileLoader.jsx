import React from 'react';
import { uploadImage } from 'services/cloudinaryService';

import { Spinner } from 'components/shared';

class FileLoader extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.fileReader = new FileReader();
    this.selectedImg = null;
    this.state = {
      imgBase64: '',
      imgStatus: 'INIT',
    };
  }

  componentDidMount() {
    this.listenToFileLoading();
  }

  componentWillUnmount() {
    this.removeFileLoadListener();
  }

  changeImageStatus = (imgStatus) => this.setState({ imgStatus: imgStatus });

  handleImageLoad = ({ target: { result: imgBase64 } }) => {
    this.setState({ imgBase64, imgStatus: 'LOADED' });
  };

  listenToFileLoading = () => {
    this.fileReader.addEventListener('load', this.handleImageLoad);
  };

  removeFileLoadListener = () => {
    this.fileReader.removeEventListener('load', this.handleImageLoad);
  };

  handleChange = (event) => {
    this.selectedImg = event.target.files[0];
    this.fileReader.readAsDataURL(this.selectedImg);
  };

  cancelImage = () => {
    this.inputRef.current.value = null;
    this.selectedImg = null;
    this.setState({ imgBase64: '', imgStatus: 'INIT' });
  };

  handleImageUpload = () => {
    this.changeImageStatus('PENDING');
    uploadImage(this.selectedImg)
      .then((uploadedImage) => {
        this.props.onFileUpload(uploadedImage._id);
        this.changeImageStatus('UPLOADED');
      })
      .catch(() => this.changeImageStatus('ERROR'));
  };

  render() {
    const { imgBase64, imgStatus } = this.state;
    return (
      <div className='input'>
        <label>Cover Image</label>
        <input
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        {imgBase64 && (
          <>
            <img src={imgBase64} alt='preview' className='img-preview' />
            {imgStatus === 'PENDING' && <Spinner />}
            {imgStatus === 'UPLOADED' && (
              <span>
                Image upload successfuly
                <span role='img' aria-label='icon'>
                  ✅{' '}
                </span>
              </span>
            )}
            {imgStatus === 'ERROR' && (
              <span>
                Image upload failed
                <span role='img' aria-label='icon'>
                  ❌
                </span>
              </span>
            )}
            <div className='img-buttons'>
              {imgStatus === 'LOADED' && (
                <button onClick={this.handleImageUpload}>Upload</button>
              )}
              {imgStatus !== 'UPLOADED' && (
                <button
                  onClick={this.cancelImage}
                  className='img-buttons-cancel'
                >
                  Cancel
                </button>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default FileLoader;
