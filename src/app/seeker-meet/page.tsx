import SeekerMeet from "@/components/seeker-meet";
import { Title } from "@/components/title";

function NotesPage(){
  return(
    <>
      <Title title="Meets"/>
      <div className="flex w-full justify-center mt-auto">
        <SeekerMeet/>
      </div>
    </>
  )
};

export default NotesPage;
