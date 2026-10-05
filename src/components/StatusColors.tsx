export const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  'Production': {
    bg: 'hsl(var(--accent) / 0.1)',
    text: 'hsl(var(--accent))',
    border: 'hsl(var(--accent) / 0.35)',
  },
  'In Progress': {
    bg: 'hsl(var(--primary) / 0.1)',
    text: 'hsl(var(--primary))',
    border: 'hsl(var(--primary) / 0.3)',
  },
  'Coming Soon': {
    bg: 'hsl(var(--muted))',
    text: 'hsl(var(--muted-foreground))',
    border: 'hsl(var(--border))',
  },
  'Planned': {
    bg: 'hsl(var(--muted))',
    text: 'hsl(var(--muted-foreground))',
    border: 'hsl(var(--border))',
  },
  'Professional · Production': {
    bg: 'hsl(var(--primary) / 0.12)',
    text: 'hsl(var(--primary))',
    border: 'hsl(var(--primary) / 0.35)',
  },
};