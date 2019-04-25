import React, { Component } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
// import './reset.css';

/*
 * dynamic properties is : idealFacingMode, idealResolution, isMaxResolution
 * In this example we set the idealFacingMode
 */
class CameraInputGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      idealFacingMode: FACING_MODES.ENVIRONMENT
    };
    this.renderButtons = this.renderButtons.bind(this);
  }

  renderButtons() {
    return (
      <div>
        <button
          onClick={e => {
            this.setState({ idealFacingMode: FACING_MODES.USER });
          }}
        >
          {' '}
          FACING_MODES.USER{' '}
        </button>

        <button
          onClick={e => {
            this.setState({ idealFacingMode: FACING_MODES.ENVIRONMENT });
          }}
        >
          {' '}
          FACING_MODES.ENVIRONMENT{' '}
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderButtons()}
        <Camera
          idealFacingMode={this.state.idealFacingMode}
          onTakePhoto={() => {}}
        />
      </div>
    );
  }
}

export default CameraInputGroup;

// import React, { Component } from 'react';
// import Camera, { IMAGE_TYPES } from '../react-html5-camera-photo';
// // import './reset.css';

// function dataURItoBlob(dataURI) {
//   let byteString = atob(dataURI.split(',')[1]);

//   // separate out the mime component
//   let mimeString = dataURI
//     .split(',')[0]
//     .split(':')[1]
//     .split(';')[0];

//   let ab = new ArrayBuffer(byteString.length);
//   let ia = new Uint8Array(ab);
//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }
//   let blob = new Blob([ab], { type: mimeString });
//   return blob;
// }

// function padWithZeroNumber(number, width) {
//   number = number + '';
//   return number.length >= width
//     ? number
//     : new Array(width - number.length + 1).join('0') + number;
// }

// function getFileExtention(blobType) {
//   // by default the extention is .png
//   let extention = IMAGE_TYPES.PNG;

//   if (blobType === 'image/jpeg') {
//     extention = IMAGE_TYPES.JPG;
//   }
//   return extention;
// }

// function getFileName(imageNumber, blobType) {
//   const prefix = 'photo';
//   const photoNumber = padWithZeroNumber(imageNumber, 4);
//   const extention = getFileExtention(blobType);

//   return `${prefix}-${photoNumber}.${extention}`;
// }

// function downloadImageFileFomBlob(blob, imageNumber) {
//   window.URL = window.webkitURL || window.URL;

//   let anchor = document.createElement('a');
//   anchor.download = getFileName(imageNumber, blob.type);
//   anchor.href = window.URL.createObjectURL(blob);
//   let mouseEvent = document.createEvent('MouseEvents');
//   mouseEvent.initMouseEvent(
//     'click',
//     true,
//     true,
//     window,
//     1,
//     0,
//     0,
//     0,
//     0,
//     false,
//     false,
//     false,
//     false,
//     0,
//     null
//   );
//   anchor.dispatchEvent(mouseEvent);
// }

// function downloadImageFile(dataUri, imageNumber) {
//   let blob = dataURItoBlob(dataUri);
//   downloadImageFileFomBlob(blob, imageNumber);
// }

// class CameraInputGroup extends Component {
//   constructor() {
//     super();
//     this.imageNumber = 0;
//   }
//   onTakePhoto(dataUri) {
//     downloadImageFile(dataUri, this.imageNumber);
//     this.imageNumber += 1;
//   }

//   render() {
//     return (
//       <div className="camera-input-group">
//         <Camera
//           onTakePhoto={dataUri => {
//             this.onTakePhoto(dataUri);
//           }}
//           imageType={IMAGE_TYPES.PNG}
//         />
//       </div>
//     );
//   }
// }

// export default CameraInputGroup;
