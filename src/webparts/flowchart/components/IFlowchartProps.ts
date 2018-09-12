import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
import { IFlowchartWebPartProps } from "../FlowchartWebPart";

export interface IFlowchartProps extends IFlowchartWebPartProps {
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
  context: WebPartContext;
}
