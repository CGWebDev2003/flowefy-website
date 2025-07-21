import "./techStackSection.css";
import bootstrap from "../../../../assets/techStack/bootstrap.webp";
import css from "../../../../assets/techStack/css.webp";
import figma from "../../../../assets/techStack/figma.webp";
import github from "../../../../assets/techStack/github.webp";
import googlefonts from "../../../../assets/techStack/googlefonts.webp";
import html from "../../../../assets/techStack/html.webp";
import javascript from "../../../../assets/techStack/js.webp";
import lunacy from "../../../../assets/techStack/lunacy.webp";
import react from "../../../../assets/techStack/react.webp";
import supabase from "../../../../assets/techStack/supabase.webp";
import vercel from "../../../../assets/techStack/vercel.webp";
import vscode from "../../../../assets/techStack/vscode.webp";

export default function TechStackSection() {
    return(
        <div className="techStackSection">
            <div className="featureHeader">
                <h2 className="featureHeadline">Tech Stack</h2>
            </div>
            <div className="techStackList">
                <div className="techStackItem" title="JavaScript">
                    <img className="techStackLogo" src={javascript} alt="JavaScript" />
                </div>
                <div className="techStackItem" title="HTML">
                    <img className="techStackLogo" src={html} alt="HTML" />
                </div>
                <div className="techStackItem" title="CSS">
                    <img className="techStackLogo" src={css} alt="CSS" />
                </div>
                <div className="techStackItem" title="React">
                    <img className="techStackLogo" src={react} alt="React" />
                </div>
                <div className="techStackItem" title="GitHub">
                    <img className="techStackLogo" src={github} alt="GitHub" />
                </div>
                <div className="techStackItem" title="Bootstrap Icons">
                    <img className="techStackLogo" src={bootstrap} alt="Bootstrap Icons" />
                </div>
                <div className="techStackItem" title="Vercel">
                    <img className="techStackLogo" src={vercel} alt="Vercel" />
                </div>
                <div className="techStackItem" title="Google Fonts">
                    <img className="techStackLogo" src={googlefonts} alt="Google Fonts" />
                </div>
                <div className="techStackItem" title="Supabase">
                    <img className="techStackLogo" src={supabase} alt="Supabase" />
                </div>
                <div className="techStackItem" title="VS Code">
                    <img className="techStackLogo" src={vscode} alt="VS Code" />
                </div>
                <div className="techStackItem" title="Figma">
                    <img className="techStackLogo" src={figma} alt="Figma" />
                </div>
                <div className="techStackItem" title="Lunacy">
                    <img className="techStackLogo" src={lunacy} alt="Lunacy" />
                </div>
            </div>
        </div>
    );
}