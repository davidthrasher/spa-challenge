import { useCallback, useState } from 'react';
import './App.css';
import { useDropzone } from 'react-dropzone';
import { DataSection } from './components/data-section.tsx';
import { LabelWithDropdown } from './components/label-with-dropdown.tsx';

function App() {
  const [fileName, setFileName] = useState('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileName(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <main>
      <div className="modal">
        <button className="close-button">X</button>
        <h1>Document Upload</h1>
        <div className="forms-and-footer-container">
          <section>
            <form className="form1">
              <select name="select" id="select">
                <option value="">Select Import Name:</option>
              </select>
              <>
                <label className="upload-label">Select a manifest that you'd like to import</label>
                <div className="upload-container">
                  <div {...getRootProps()} className="drop-container">
                    <input {...getInputProps()} />

                    <div className="icon-and-text">
                      <div className="yellow-paper" />
                      <p>
                        Drag & Drop Here or <strong>Browse</strong>
                      </p>
                    </div>
                  </div>
                  <input
                    value="Upload Manifest"
                    {...getRootProps({
                      onClick: (event) => console.log(event),
                      role: 'button',
                      'aria-label': 'drag and drop area',
                    })}
                    type="button"
                  />
                </div>
              </>
              <div className="progress-container">
                <div className="yellow-paper" />
                <div className="file-name-and-bar-container">
                  <p>{fileName ? fileName : 'File name will show here'}</p>
                  <div className="progress-bar">
                    <div />
                  </div>
                </div>
              </div>
              <DataSection label="Elapse Data Checking:">
                <p>No Elapsed Dates!</p>
              </DataSection>
              <DataSection label="Tolerance Window:">
                <div className="toggle-container">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span style={{ whiteSpace: 'nowrap' }}>Toggle ON | Select Tolerance Level</span>
                </div>
              </DataSection>
            </form>
            <div className="form2">
              <div style={{ textAlign: 'left' }}>
                <label>Split schedule using social distancing?</label>
                <div style={{ display: 'flex', gap: '5px', padding: '10px 0' }}>
                  <label className="radio-container">
                    Yes
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </label>

                  <label className="radio-container">
                    No
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <DataSection label="Location Checking:">
                <p>All Available!</p>
              </DataSection>
              <DataSection label="Client:">
                <div style={{ display: 'flex', gap: '5px', padding: '10px 0' }}>
                  <label className="radio-container">
                    Single
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <label className="radio-container">
                    Multiple
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </DataSection>
              <LabelWithDropdown label="Testing Center 1" />
              <LabelWithDropdown label="Testing Center 2" />
              <LabelWithDropdown label="Testing Center 3" />
              <LabelWithDropdown label="Testing Center 4" />
            </div>
          </section>
          <footer>
            <p>Data in the import file is correct. Please press Continue to import.</p>
            <div className="button-container">
              <button>Continue Import</button>
              <button className="secondary-button">Cancel</button>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
