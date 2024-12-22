import i18n from 'i18next'
import { useEffect, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import homeStore from '@/features/stores/home'
import settingsStore from '@/features/stores/settings'
import { IconButton } from './iconButton'
import { Link } from './link'
import { isLanguageSupported } from '@/features/constants/settings'

export const Introduction = () => {
  // コンポーネント全体を非表示にするため、nullを返します
  return null
}
