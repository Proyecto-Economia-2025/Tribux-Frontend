import React from 'react';
import { cn } from '../utils/cn';

interface AlertProps {
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: string;
  className?: string;
}

const getAlertStyles = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300';
    case 'danger':
      return 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300';
    case 'warning':
      return 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300';
    default:
      return 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300';
  }
};

const getIcon = (type: string, customIcon?: string) => {
  if (customIcon) return customIcon;

  switch (type) {
    case 'success': return '✓';
    case 'danger': return '⚠';
    case 'warning': return '⚠';
    default: return 'ℹ';
  }
};

export const Alert: React.FC<AlertProps> = ({
  type,
  message,
  dismissible = true,
  onDismiss,
  icon,
  className = ''
}) => {
  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border',
        getAlertStyles(type),
        className
      )}
      role="alert"
    >
      <span className="flex-shrink-0 text-lg" aria-hidden="true">
        {getIcon(type, icon)}
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Cerrar alerta"
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
};