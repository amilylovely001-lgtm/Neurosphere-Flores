/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VolumeSection {
  title: string;
  id: string;
  content: string;
  subsections?: Array<{
    title: string;
    content: string;
    table?: Array<{ [key: string]: string | number }>;
    diagram?: string;
  }>;
}

export interface Volume {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  sections: VolumeSection[];
}

export interface RiskItem {
  id: string;
  category: 'Structural' | 'Environmental' | 'Energy' | 'Water/Waste' | 'AI & IoT' | 'Social & Cultural' | 'Disaster' | 'Financial & Operational';
  risk: string;
  probability: number; // 1-5
  impact: number; // 1-5
  mitigation: string;
  residualRisk: 'Low' | 'Medium' | 'High';
  owner: string;
}

export interface WBSNode {
  id: string;
  code: string;
  title: string;
  level: number;
  description?: string;
  children?: WBSNode[];
}

export interface BOMItem {
  id: string;
  category: 'Structure' | 'Energy' | 'Water' | 'Waste' | 'IoT & Monitoring' | 'Foundation' | 'Envelope';
  material: string;
  specification: string;
  unit: string;
  qty: number;
  rate: number; // USD
  amount: number; // USD
  vendorCategory: string;
  alternative: string;
}

export interface Requirement {
  id: string;
  type: 'Functional' | 'Non-Functional' | 'Safety' | 'Security';
  category: string;
  text: string;
  layer: string;
  verificationMethod: 'Test' | 'Analysis' | 'Demonstration' | 'Inspection';
  acceptanceCriteria: string;
}

export interface SensorReading {
  id: string;
  name: string;
  type: 'DFOS' | 'FBG' | 'Accelerometer' | 'Acoustic' | 'Environmental';
  value: number;
  unit: string;
  status: 'Normal' | 'Warning' | 'Critical';
  location: string;
}
