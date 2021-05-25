export default function Youtube ({ videoUrl }) {
  const ID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  return (
    <div className='w-full px-0 md:px-1 mb-4 rounded-lg shadow-lg overflow-hidden'>
      <iframe
        className='w-full h-96'
        src={
          `https://www.youtube.com/embed/` +
          videoUrl.match(ID_REGEX)[1] + '?autoplay=1'
        }
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        autoPlay="autoplay"
        
      ></iframe>
    </div>
  )
  // }
  // return <div></div>
}