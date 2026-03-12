import React from 'react';
import './App.css';
import "@react-email-dnd/editor/styles.css"
import { CanvasProvider, EmailEditor } from "@react-email-dnd/editor";

function App() {
		return (
			<div className="App">
					{process.env.REACT_APP_ANALYTICS_TOGGLE === 'true' && <>
              <CanvasProvider onSave={(doc) => console.log(doc)} onDocumentChange={() => console.log('111')}>
                  <EmailEditor onSave={(doc) => console.log(doc)}/>
              </CanvasProvider>
          </>}
					{process.env.REACT_APP_ANALYTICS_TOGGLE === 'false' && <>Toggle True</>}
			</div>
		);
}

export default App;
