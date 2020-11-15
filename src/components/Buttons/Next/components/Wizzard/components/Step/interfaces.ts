import React from 'react';

export type IStatus = 'active' | 'disabled' | 'visualized';

export interface IProps {
  status?: IStatus;
  fullRightTrace?: boolean;
  children?: React.ReactNode;
}

export interface IContainer {
  status?: IStatus;
}

export interface IRightTrace {
  status?: IStatus;
  fullRightTrace?: boolean;
}
