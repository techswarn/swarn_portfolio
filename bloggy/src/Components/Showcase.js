import Overview from "./Overview";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import { PostStateProvider } from "./state/usePostState";
const Showcase = () => {
  return (
    <div className="showcase-container">
      <PostStateProvider>
        <Sidebar />
        <Overview />
        {/* <Posts /> */}
      </PostStateProvider>
    </div>
  );
};

export default Showcase;
