"use client";

import React from "react";
import "./STIndustriesSection.css";
import type { STIndustriesData } from "@/lib/queries/safety-training";

interface Props {
    data: STIndustriesData;
}

export default function STIndustriesSection({ data }: Props) {
    return (
        <section className="stind-industries">
            {/* Container */}
            <div className="stind-container">
                {/* Header */}
                <div className="stind-header">
                    <span className="stind-label">{data.label}</span>
                    <h2 className="stind-heading">{data.heading}</h2>
                    <p className="stind-description">{data.description}</p>
                </div>

                {/* Cards grid */}
                <div className="stind-cards">
                    {data.industries.map((industry, i) => (
                        <div key={i} className="stind-card">
                            <div className="stind-card-icon">{industry.icon}</div>
                            <h3 className="stind-card-title">{industry.title}</h3>
                            <p className="stind-card-description">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
