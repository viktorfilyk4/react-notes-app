import Layout from "./components/Layout";
import NoteInputsSection from "./components/NoteInputsSection";
import FoldersListSection from "./components/FoldersListSection";
import NotesListSection from "./components/NotesListSection";
import Navbar from "./components/Navbar";
import ListSectionsContainer from "./components/ListSectionsContainer";
import NoteNavbar from "./components/NoteNavbar";
import RightSectionContainer from "./components/RightSectionContainer";
import LeftSectionContainer from "./components/LeftSectionContainer";

function App() {
  return (
    <Layout>
      <LeftSectionContainer>
        <Navbar />
        <ListSectionsContainer>
          <FoldersListSection />
          <NotesListSection />
        </ListSectionsContainer>
      </LeftSectionContainer>

      <RightSectionContainer>
        <NoteNavbar />
        <NoteInputsSection />
      </RightSectionContainer>
    </Layout>
  );
}

export default App;
