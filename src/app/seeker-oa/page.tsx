import SeekerOA from "@/components/seeker-oa";
import { Title } from "@/components/title";

function NotesPage(){
  return(
    <>
      <Title title="Online Assesments"/>
      <div className="flex w-full justify-center mt-auto">
        <SeekerOA/>
      </div>
    </>
  )
};

export default NotesPage;
