import SeekerNotes from "@/components/seeker-notes";
import { Title } from "@/components/title";

function NotesPage(){
  return(
    <>
      <Title title="Notes From Coaches"/>
      <div className="flex w-full justify-center mt-auto">
        <SeekerNotes/>
      </div>
    </>
  )
};

export default NotesPage;
