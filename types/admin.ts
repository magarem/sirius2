import type { DateType, LinkType } from '@/types/index'

type ChartType = {
  type?: string
  series: any[]
  width?: number
  height?: number
  options: {}
}

export type StatType = {
  title: string
  numeric: number
  growth: number
  prefix?: string
  postfix?: string
  chart?: ChartType
}

export type UserType = {
  image?: string
  name?: string
  role?: string
}

export type ProjectType = {
  image?: string
  category?: string
  status: string
  name: string
  about?: string
  started: DateType
  link?: LinkType
  comments: number
  tasks: number
  progress: number
  assignees: UserType[]
}
