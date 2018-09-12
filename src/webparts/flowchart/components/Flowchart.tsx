import * as React from 'react';
import styles from './Flowchart.module.scss';
import { IFlowchartProps } from './IFlowchartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";


export default class Flowchart extends React.Component<IFlowchartProps, {}> {
  public render(): React.ReactElement<IFlowchartProps> {
    return (


      <div>

        <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateProperty} />

        <h1>{this.props.description}</h1>
      </div>


    );
  }
}
