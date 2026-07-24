import React from "react";

export const Table = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className = "", children, ...props }, ref) => (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border-subtle)] dark:border-slate-800 shadow-xs">
      <table ref={ref} className={`w-full text-left text-sm border-collapse ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", children, ...props }, ref) => (
    <thead ref={ref} className={`bg-[var(--background-secondary)] dark:bg-slate-950 border-b border-[var(--border-subtle)] dark:border-slate-800 ${className}`} {...props}>
      {children}
    </thead>
  )
);
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = "", children, ...props }, ref) => (
    <tbody ref={ref} className={`divide-y divide-[var(--divider-subtle)] dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 ${className}`} {...props}>
      {children}
    </tbody>
  )
);
TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className = "", children, ...props }, ref) => (
    <tr ref={ref} className={`hover:bg-[var(--surface-hover)] dark:hover:bg-slate-950/20 transition-colors ${className}`} {...props}>
      {children}
    </tr>
  )
);
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", children, ...props }, ref) => (
    <th ref={ref} className={`p-4 font-bold text-slate-900 dark:text-white ${className}`} {...props}>
      {children}
    </th>
  )
);
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className = "", children, ...props }, ref) => (
    <td ref={ref} className={`p-4 text-slate-700 dark:text-slate-300 ${className}`} {...props}>
      {children}
    </td>
  )
);
TableCell.displayName = "TableCell";
