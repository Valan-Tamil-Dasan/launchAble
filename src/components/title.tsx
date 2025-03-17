import {CONFIG} from '../config'
export function Title(){
  const title = CONFIG.TITLE;
  return(
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mb-30">
        {title}
        </h1>
      </div>
    </>
  )
};

