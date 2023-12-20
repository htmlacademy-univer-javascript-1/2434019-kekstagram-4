import {renderGallery} from './gallery.js';
import {initEditPopup} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

initEditPopup();

getData()
  .then((data) => {
    renderGallery(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
