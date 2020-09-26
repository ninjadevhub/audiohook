import React from "react";
import './style.scss';

const Mp3FormatIcon = '/images/mp3-format-icon.svg';
const BinIcon = '/images/bin-icon.svg';

interface IFileDetails {
  name: string;
  size: string;
}

const FileDetails: React.FC<IFileDetails> = ({
  name,
  size,
}) => {

  return (
    <div className="file-details">
      <img src={Mp3FormatIcon} alt="" className="file-details__image" />
      <div className="file-datails__info">
        <p className="file-details__name">{name}</p>
        <p className="file-details__size">{size}</p>
      </div>

      {'test' && (
        <button
          type="button"
          // onClick={onResetClick}
          className="file-details__delete-image"
        >
          <img src={BinIcon} alt="" />
        </button>
      )}
    </div>
  );
};

export default FileDetails;
