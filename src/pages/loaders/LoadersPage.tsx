import { Component, default as React, ReactNode } from "react";
import {
    ArcRotate,
    ArcRotateDouble,
    ArcRotateTwo,
    ArcScale,
    BallChasing,
    BallPulse,
    BallPulseDouble,
    CirclePulse,
    CirclePulseMultiple,
    Clock,
    SquareRotate,
    SquareSplit,
    Wave,
    WaveSpread
} from "components/preloaders";

export class LoadersPage extends Component {
    render(): ReactNode {
        return (
            <div className="components-store loaders">
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <BallChasing/>
                    </div>
                    <div className="components-store__item">
                        <BallPulse/>
                    </div>
                    <div className="components-store__item">
                        <BallPulseDouble/>
                    </div>
                    <div className="components-store__item">
                        <Wave/>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <WaveSpread/>
                    </div>
                    <div className="components-store__item">
                        <CirclePulse/>
                    </div>
                    <div className="components-store__item">
                        <CirclePulseMultiple/>
                    </div>
                    <div className="components-store__item">
                        <ArcRotateDouble/>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <SquareSplit/>
                    </div>
                    <div className="components-store__item">
                        <ArcRotate/>
                    </div>
                    <div className="components-store__item">
                        <ArcRotateTwo/>
                    </div>
                    <div className="components-store__item">
                        <ArcScale/>
                    </div>
                </div>
                <div className="components-store_4-column">
                    <div className="components-store__item">
                        <Clock/>
                    </div>
                    <div className="components-store__item">
                        <SquareRotate/>
                    </div>
                </div>
            </div>
        );
    }
}
