// analogSignalPanelModel.ts

import { NodeRecord } from "@/helpers/node/nodeRecord";

import {
  ActivityChartPanelModel,
  ActivityChartPanelModelProps,
} from "../activityChartPanelModel";
import { ActivityChartPanel } from "../activityChartPanel";

export interface AnalogSignalPanelModelProps
  extends ActivityChartPanelModelProps {
  records?: any;
  params?: any[];
}

export class AnalogSignalPanelModel extends ActivityChartPanelModel {
  constructor(
    panel: ActivityChartPanel,
    model: AnalogSignalPanelModelProps = {}
  ) {
    super(panel);
    this.activityType = "analog";
    this.id = "analogSignalPanelModel";
    this.label = "analog signals";

    this.init(model);
  }

  /**
   * Initialize panel model for analog signals.
   *
   * @remarks
   * It sets activities and gets records from recorders.
   */
  override init(model: AnalogSignalPanelModelProps = {}): void {
    this.initActivities();
    this.initAnalogRecords();
    if (model.records) {
      this.initAnalogRecordsVisible(model.records);
    }
  }

  get axisTitle(): string {
    let title = "";
    const records = this.state.recordsVisible;
    const uniqueRecords = new Set(
      records.map((record: NodeRecord) => record.id)
    );
    if (uniqueRecords.size === 1) {
      const record = records[0];
      title = record.labelCapitalize;
      if (record.unit) {
        title += ` [${record.unit}]`;
      }
    } else if (records.every((event: any) => event.id.includes("ct_"))) {
      title = "Channel activation";
    } else if (records.every((event: any) => event.id.includes("g_"))) {
      title = "Conductance [nS]";
    } else if (records.every((event: any) => event.id.includes("I_syn_"))) {
      title = "Total synaptic current [pA]";
    } else if (
      records.every((event: any) => event.id.includes("weighted_spikes_"))
    ) {
      title = "Weighted incoming spikes";
    } else {
      title = "Multiple records";
    }
    return title;
  }

  /**
   * Initialize activity for the panel model.
   */
  override initActivities(): void {
    this.activities = this.panel.graph.project.activities.analogSignals;
  }

  /**
   * Update activities of analog signals.
   */
  override updateActivities(): void {
    this.activities = this.panel.graph.project.activities.analogSignals;
  }
}
