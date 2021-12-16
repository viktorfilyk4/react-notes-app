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
import { LayoutContext, NotesContext, FoldersContext } from "./context";

function App() {
  const [isNoteWindowOpen, setNoteWindowOpen] = useState(false);
  const [isFoldersSectionOpen, setFoldersSectionOpen] = useState(false);
  const [showOnlyFavoriteNotes, setShowOnlyFavoriteNotes] = useState(false);

  return (
    <LayoutContext.Provider value={[isNoteWindowOpen, setNoteWindowOpen]}>
      <Layout>
        <LeftSectionContainer>
          <NotesContext.Provider value={[showOnlyFavoriteNotes, setShowOnlyFavoriteNotes]}>
            <FoldersContext.Provider value={[isFoldersSectionOpen, setFoldersSectionOpen]}>
              <Navbar />
              <ListSectionsContainer>
                <FoldersListSection />
                <NotesListSection />
              </ListSectionsContainer>
            </FoldersContext.Provider>
          </NotesContext.Provider>
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
