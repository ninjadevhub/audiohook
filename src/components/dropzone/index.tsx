import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import FileDetails from '../file-details';
import './style.scss';

const DownloadIcon = '/images/download-icon.svg';

const getFormattedFileSize = (bytes: number, decimals = 2) => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const kb = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(kb));
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return `${(bytes / kb ** i).toFixed(decimals)} ${sizes[i]}`;
};

interface IFile {
  name: string;
  size: number;
  type: string;
}

const MyDropzone: React.FC = () => {
  const [fileDropped, setFileDropped] = useState(false);
  const [acceptedFile, setAcceptedFile] = useState<IFile>({name: '', size: 0, type: ''});
  const onDrop = useCallback((acceptedFiles: any[]) => {
    setFileDropped(true);
    setAcceptedFile(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  const { name, size } = acceptedFile;

  return (
    <>
      {fileDropped ? (
        <div>
          <FileDetails name={name} size={getFormattedFileSize(size)} />
        </div>
      )
       : (<div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <img src={DownloadIcon} alt="" />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <div>
              <p className="dropzone__text">Drag & Drop or <span>Browse</span></p>
              <p className="dropzone__additional-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        }
      </div>)}
    </>
  )
};


export default MyDropzone;