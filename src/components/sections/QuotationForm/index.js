import React from 'react';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import HubspotContactForm from "../HubspotContactForm";

const QuotationForm = ({ bg = '', short = false }) => {
    return (
        <section className="quotation-form container" id="quotation-form">
            <div className={`content-wrapper ${bg === 'gray' ? 'bg-gray' : 'no-pad-y'}`}>
                <FramerMotionAnimation className="title-wrapper text-center">
                    <h2 className="title">Angebot anfragen</h2>
                    <p className="description">Haben Sie eine Frage zu unseren Kühlzellen? Wir helfen Ihnen
                        gerne weiter und freuen uns auf Ihre Kontaktaufnahme.</p>
                </FramerMotionAnimation>
                {/*<form className="form-wrapper" onSubmit={submitHandler}>
                    <div className="fields-wrapper grid md:grid-cols-2">
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary">Firma / Betrieb / Restaurant</p>
                            <input type="text" name="company" className="input" />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary required">Vorname</p>
                            <input type="text" name="first-name" className="input" required />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary required">Nachname</p>
                            <input type="text" name="last-name" className="input" required />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary required">Email</p>
                            <input type="email" name="email" className="input" required />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary required">Telefon / Handy-Nr.</p>
                            <input type="tel" name="phone" className="input" required />
                        </FramerMotionAnimation>
                        { !short && (
                            <FramerMotionAnimation className="input-wrapper">
                                <p className="input-label text-primary">Kühlzelle - Breite</p>
                                <input type="text" name="width" className="input" />
                            </FramerMotionAnimation>
                        )}
                        <FramerMotionAnimation className="input-wrapper">
                            <p className="input-label text-primary">Nachricht</p>
                            <input type="text" name="news" className="input" />
                        </FramerMotionAnimation>
                        { !short && (
                            <FramerMotionAnimation className="input-wrapper">
                                <p className="input-label text-primary">Kühlzelle - Tiefe</p>
                                <input type="text" name="depth" className="input" />
                            </FramerMotionAnimation>
                        )}
                        { !short && (
                            <FramerMotionAnimation className="input-wrapper">
                                <p className="input-label text-primary">Kühlzelle - Höhe</p>
                                <input type="text" name="height" className="input" />
                            </FramerMotionAnimation>
                        )}
                        { !short && (
                            <FramerMotionAnimation className="input-wrapper">
                                <p className="input-label text-primary">Boden</p>
                                <div className="flex input-group items-center">
                                    <div>
                                        <input type="radio" id="ja" name="floor" defaultChecked />
                                        <label htmlFor="ja" className="input-label">Ja</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="nein" name="floor" />
                                        <label htmlFor="nein" className="input-label">Nein</label>
                                    </div>
                                </div>
                            </FramerMotionAnimation>
                        )}
                    </div>
                   <FramerMotionAnimation>
                       <button className="btn-secondary submit-btn" type="submit">
                           Anfrage schicken
                       </button>
                   </FramerMotionAnimation>
                </form>*/}
                { short ? (
                    <HubspotContactForm
                        region="eu1"
                        portalId="26785264"
                        formId='3437a71e-595c-4773-a777-d096645aae87' />
                ) : (
                    <HubspotContactForm
                        region="eu1"
                        portalId="26785264"
                        formId='f2afef64-68f7-4512-9259-edaedff7695a' />
                )}
            </div>
        </section>
    );
};

export default QuotationForm;
