import { SeekerResume } from "@/components/seeker-resume";
import { Title } from "@/components/title";

function ResumePage(){
  return(
    <>
      <Title title="Upload Your Resume"/>
      <div className="flex justify-center mt-auto">
        <SeekerResume/>
      </div>
    </>
  )
};

export default ResumePage;
