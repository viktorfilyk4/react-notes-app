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
import { LayoutContext, NotesContext, FoldersContext, ActiveNoteContext } from "./context";
import folderNames from "./folderNames";

function App() {
  const [isNoteWindowOpen, setNoteWindowOpen] = useState(false);
  const [isSomeNoteItemClicked, setSomeNoteItemClicked] = useState(false);
  const [isFoldersSectionOpen, setFoldersSectionOpen] = useState(false);
  const [showNotesOfFolder, setShowNotesOfFolder] = useState(folderNames.all);
  const [activeNote, setActiveNote] = useState({});

  const layoutContextProviderValue = [
    [isNoteWindowOpen, setNoteWindowOpen],
    [isSomeNoteItemClicked, setSomeNoteItemClicked]
  ];

  return (
    <LayoutContext.Provider value={layoutContextProviderValue}>
      <Layout>
        <ActiveNoteContext.Provider value={[activeNote, setActiveNote]}>
          <LeftSectionContainer>
            <NotesContext.Provider value={[showNotesOfFolder, setShowNotesOfFolder]}>
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
        </ActiveNoteContext.Provider>
      </Layout>
    </LayoutContext.Provider>
  );
}

export default App;
