import './data-section.css';
import { ReactElement } from 'react';
export function DataSection({ label, children }: { label: string; children: ReactElement }) {
  return (
    <div className="container">
      <label>{label}</label>
      {children}
    </div>
  );
}
