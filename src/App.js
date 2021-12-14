import Layout from "./components/Layout";
import NoteInputsSection from "./components/NoteInputsSection";
import FoldersListSection from "./components/FoldersListSection";
import NotesListSection from "./components/NotesListSection";
import Navbar from "./components/Navbar";
import ListSectionsContainer from "./components/ListSectionsContainer";
import NoteNavbar from "./components/NoteNavbar";
import RightSectionContainer from "./components/RightSectionContainer";
import LeftSectionContainer from "./components/LeftSectionContainer";
import { useState } from "react";
import { LayoutContext } from "./context";

function App() {
  const [isNoteWindowOpen, setNoteWindowOpen] = useState(false);
  const [isFoldersSectionOpen, setFoldersSectionOpen] = useState(false);

  return (
    <LayoutContext.Provider value={[isNoteWindowOpen, setNoteWindowOpen]}>
      <Layout>
        <LeftSectionContainer>
          <Navbar {...{ isFoldersSectionOpen, setFoldersSectionOpen }} />
          <ListSectionsContainer>
            <FoldersListSection {...{ isFoldersSectionOpen }} />
            <NotesListSection />
          </ListSectionsContainer>
        </LeftSectionContainer>

        <RightSectionContainer>
          <NoteNavbar />
          <NoteInputsSection />
        </RightSectionContainer>
      </Layout>
    </LayoutContext.Provider>
  );
}

export default App;
