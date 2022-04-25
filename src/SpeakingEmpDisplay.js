import React, { Component } from "react";
import { SpeakingEmpEditor } from "./SpeakingEmpEditor";
import { SpeakingCourseTable } from "./SpeakingCourseTable";

export default class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedSpeaking: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedSpeaking: speaking })
    }

    createSpeaking = () => {
        this.setState({ showEditor: true, selectedSpeaking: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedSpeaking: null })
    }

    saveSpeaking = (speaking) => {
        this.props.saveCallback(speaking);
        this.setState({ showEditor: false, selectedSpeaking: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <SpeakingEmpEditor 
                key={ this.state.selected.id || -1 }
                speaking={ this.state.selected } 
                saveCallback={ this.saveSpeaking }
                cancelCallback={ this.cancelEditing } />
        } else {
            console.log("-- in SpeakingEmpDisplay --");
            return <div className="m-2">
                <SpeakingCourseTable 
                    speaking={ this.props.speaking }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                  <div className="text-center">
                    <button className="btn btn-primary m-1" 
                        onClick={ this.createSpeaking }>
                        Create Speaking Course
                    </button>
                </div>                      
            </div>
        }
    }
}
