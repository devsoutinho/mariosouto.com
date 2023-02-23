export function Video({ videoId, youtube, ratio }) {
  if(!youtube) return null;
 
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}