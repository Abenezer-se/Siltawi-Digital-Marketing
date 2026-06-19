import {
  Megaphone,
  Code,
  Palette,
  FileText,
  TrendingUp,
  CheckCircle,
  Users,
  Briefcase,
  Award,
  Smile,
  Lightbulb,
  Eye,
  Crown,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: any;
}

export default function LucideIcon({ name, className = '', size }: LucideIconProps) {
  const iconMap: Record<string, any> = {
    Megaphone,
    Code,
    Palette,
    FileText,
    TrendingUp,
    CheckCircle,
    Users,
    Briefcase,
    Award,
    Smile,
    Lightbulb,
    Eye,
    Crown,
    BookOpen,
    Phone,
    Mail,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
    ArrowRight,
    Check,
    Star,
    Github,
    Linkedin,
    Facebook,
    ExternalLink,
    MessageSquare
  };

  const Component = iconMap[name];
  if (!Component) {
    return <MessageSquare className={className} size={size} />;
  }

  return <Component className={className} size={size} />;
}
