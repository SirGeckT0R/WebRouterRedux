export default function FieldVisualization({ element }) {
  return (
    <div className='mx-5 flex flex-col'>
      {Object.entries(element).map(
        ([key, { isMainField, text, type, href }]) => {
          if (type === 'link') {
            return (
              <div className='flex gap-5 text-zinc-500' key={key}>
                <span className='first-letter:capitalize'>{key}:</span>
                <a href={href} className='underline hover:text-cyan-400'>
                  {text}
                </a>
              </div>
            );
          } else if (isMainField) {
            return (
              <div className='text-3xl first-letter:capitalize' key={key}>
                {text}
              </div>
            );
          }

          return (
            <div className='flex gap-5 text-zinc-500' key={key}>
              <span className='first-letter:capitalize'>{key}:</span>
              <span>{text}</span>
            </div>
          );
        }
      )}
    </div>
  );
}
