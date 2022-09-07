// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, imageChange} = props
  const {
    thumbnailUrl,

    id,
    thumbnailAltText,
  } = imagesList
  const onImageClick = () => {
    imageChange(id)
  }
  return (
    <li className="list-Thumbnail-item">
      <button onClick={onImageClick} className="button" type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
