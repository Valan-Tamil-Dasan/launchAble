import SeekerEditProfile from "../../components/seeker-edit-profile";
import { Title } from "@/components/title";

function ResumePage(){
  return(
    <>
      <Title title="Edit Your Profile"/>
      <div className="flex w-full justify-center mt-auto">
        <SeekerEditProfile/>
      </div>
    </>
  )
};

export default ResumePage;
