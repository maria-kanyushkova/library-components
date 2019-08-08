import { Component, default as React, ReactNode } from "react";
import "./Loaders.scss";

export class LoadersPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store loaders">
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <div className="loader-container ball-chasing">
                            <div className="loader">
                                <div className="ball-1"/>
                                <div className="ball-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container ball-pulse">
                            <div className="loader">
                                <div className="ball"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container ball-pulse-double">
                            <div className="loader">
                                <div className="ball-1"/>
                                <div className="ball-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container wave">
                            <div className="loader">
                                <div className="line-1"/>
                                <div className="line-2"/>
                                <div className="line-3"/>
                                <div className="line-4"/>
                                <div className="line-5"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <div className="loader-container wave-spread">
                            <div className="loader">
                                <div className="line-1"/>
                                <div className="line-2"/>
                                <div className="line-3"/>
                                <div className="line-4"/>
                                <div className="line-5"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container circle-pulse">
                            <div className="loader">
                                <div className="circle"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container circle-pulse-multiple">
                            <div className="loader">
                                <div className="circle-1"/>
                                <div className="circle-2"/>
                                <div className="circle-3"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container arc-rotate-double">
                            <div className="loader">
                                <div className="arc-1"/>
                                <div className="arc-2"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <div className="loader-container square-split">
                            <div className="loader">
                                <div className="square-1"/>
                                <div className="square-2"/>
                                <div className="square-3"/>
                                <div className="square-4"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container arc-rotate">
                            <div className="loader">
                                <div className="arc"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container arc-rotate2">
                            <div className="loader">
                                <div className="arc"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container arc-scale">
                            <div className="loader">
                                <div className="arc"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <div className="loader-container clock">
                            <div className="loader">
                                <div className="arc"/>
                            </div>
                        </div>
                    </div>
                    <div className="components-store__item">
                        <div className="loader-container square-rotate-3d">
                            <div className="loader">
                                <div className="square"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
