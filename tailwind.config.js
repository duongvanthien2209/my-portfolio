const plugin = require('tailwindcss/plugin');

const SCREENS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
};

function screenToPx(screen) {
  return `${screen}px`;
}

function screenUp(screen) {
  return { min: screenToPx(screen) };
}

function screenDown(screen) {
  return { max: screenToPx(screen - 1) };
}

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '18.375rem minmax(0, 1fr)',
      },
      colors: {
        primary: '#202235',
        secondary: '#23263c',
        third: '#2a2c47',
        fourth: '#313552',
        cardBackground: '#2c304a',
        iconColor: '#b98c51',
        textPrimary: '#FFC576',
        textSecondary: '#CACBD2',
        background: '#f5f5f5',
        selected: '#F8E7F1',
        gray1: '#333333',
        gray2: '#444444',
        gray3: '#828282',
        gray4: '#BDBDBD',
        gray5: '#E0E0E0',
        'icon-gray': '#c1c1c1',
        'primary-grey-light': '#CCD3D1',
        'one-666666': '#666666',
        'one-340535': '#340535',
        'hover-background': '#FAF6F8',
        'one-999999': '#999999',
        'one-gray-1': '#333333',
        'one-84c5c3': '#84C5C3',
        'one-00506d': '#00506D',
        'one-f8f8f8': '#F8F8F8',
        'one-333333': '#333333',
        'one-828282': '#828282',
        'one-f9fafc': '#F9FAFC',
        'one-efe1f8': '#FEF1F8',
        'one-fef1f8': '#FEF1F8',
        'one-eb5757': '#EB5757',
        'one-f2f2f2': '#F2F2F2',
        'one-970c5b': '#970C5B',
        'one-eff2f7': '#EFF2F7',
        'one-f5f7fa': '#F5F7FA',
        'one-faf6f8': '#FAF6F8',
        'one-2f80ed': '#2F80ED',
        'one-2ad25f': '#2AD25F',
        'one-eafbef': '#EAFBEF',
        'one-eaf2fd': '#EAF2FD',
        'one-047eaa': '#047EAA',
        'one-e6f3f3': '#E6F3F3',
        'one-f2994a': '#F2994A',
        'one-fef4e5': '#FEF4E5',
        'one-cecece': '#CECECE',
        'one-bdbdbd': '#BDBDBD',
        'one-99a0a4': '#99A0A4',
        'one-fe0000': '#FE0000',
        'one-ffc700': '#FFC700',
        'one-e6e6e6': '#E6E6E6',
        'one-f9f9f9': '#F9F9F9',
        'one-f6f7fa': '#F6F7FA',
        'one-cfd8e9': '#CFD8E9',
        'one-ffeaea': '#FFEAEA',
        'one-d33e43': '#D33E43',
        'one-error': '#FE0000',
        'one-eeeeee': '#EEEEEE',
        'one-fcf3f8': '#FCF3F8',
        'one-e5e5e5': '#E5E5E5',
        'one-d7dbde': '#D7DBDE',
        'one-7400df': '#7400DF',
        'one-c2c7cc': '#C2C7CC',
        'one-77797c': '#77797C',
        'one-eef0f1': '#EEF0F1',
        'pure-black': '#000000',
        'one-e0e0e0': '#E0E0E0',
        'one-f39200': '#f39200',
        'one-4b8197': '#4b8197',
        'one-d8dcdf': '#d8dcdf',
        'one-6cb71d': '#6cb71d',

        // New colors for schedule
        'ds-primary': '#BD0F72',
        'ds-primary-lighter': '#CC4B90',
        'ds-primary-darker': '#8C044E',
        'ds-primary-lightest': '#F8E7F1',
        'ds-secondary': '#00506D',
        'ds-secondary-lighter': '#165C78',
        'ds-secondary-lightest': '#ECF1F4',
        'ds-secondary-darker': '#0B415C',
        'ds-grey-darker-1': '#333333',
        'ds-grey-darker-2': '#66707B',
        'ds-grey-darker-3': '#8A939E',
        'ds-grey-darker-4': '#A6ADB5',
        'ds-grey-darker-5': '#C2C7CC',
        'ds-grey-darker-6': '#D8DCDF',
        'ds-grey-darker-7': '#E9EBEC',
        'ds-grey-darker-8': '#F5F7FA',
        'ds-white': '#FFFFFF',
        'ds-success': '#36B37E',
        'ds-success-lighter': '#8BD3B5',
        'ds-success-lightest': '#EBF7F2',
        'ds-success-darker': '#2B8F65',
        'ds-error': '#DC2626',
        'ds-error-lighter': '#EB8282',
        'error-color-lightest': '#FDF2F2',
        'ds-error-darker': '#B01E1E',
        'ds-warning': '#F39200',
        'ds-warning-lighter': '#FEF4E6',
        'ds-warning-darker': '#AD6800',
        'ds-booking': '#2F80ED',
        'ds-booking-lighter': '#87B6F4',
        'ds-booking-darker': '#2A73D5',
        'one-5c5f5e': '#5C5F5E',
        'one-2360b2': '#2360B2',
        'one-e8f1fd': '#E8F1FD',
        'one-2b6b85': '#2B6B85',
        'grey-10': '#e8f1fd',
        'one-5d0035': '#5d0035',
        'eco-leaves-color': '#25B570',
      },
      outline: {
        primary: ['2px solid #bd0f72'],
        accepted: ['2px solid #2f80ed'],
      },
      backgroundOpacity: { 6: '0.06' },
      borderColor: {
        yellow: '#FFC576',

        // Old
        grey: '#EFF2F7',
        primary: '#bd0f72',
        custom: 'rgb(57, 69, 83)',
        menu: 'rgb(229, 229, 229)',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        7: '7px',
        11: '11px',
      },
      fontSize: {
        xxs: '10px',
      },
      backgroundColor: {
        'grey-light': '#eff2f7',
        'divider-grey': '#E0E0E0',

        // New
        primary: '#202235',
        secondary: '#23263c',
        'card-background': '#2c304a',
      },
      minWidth: {
        6: '1.5rem',
        9: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        21: '5.5rem',
        22: '5.75rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        60: '15rem',
        65: '16.5rem',
        86: '21.5rem',
      },
      width: {
        18: '4.5rem',
        21: '5.5rem',
        22: '5.75rem',
        26: '6.5rem',
        30: '7.5rem',
        33: '8.25rem',
        34: '8.5rem',
        49: '12.1rem',
        50: '12.5rem',
        65: '16.5rem',
        86: '21.5rem',
        fit: 'fit-content',
      },
      inset: {
        '3/20': '15%',
        '1/10': '10%',
        '1/20': '5%',
        26: '6.5rem',
        34: '8.5rem',
      },
      margin: {
        13: '3.25rem',
        42: '10.5rem',
        45: '11.25rem',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20%)', 'pointer-events': 'none' },
          '100%': { opacity: 1, transform: 'translateY(0)', 'pointer-events': 'auto' },
        },
        underlined: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s',
        underlined: 'underlined 0.2s ease-in-out infinite',
      },
      boxShadow: {
        'one-1': '0px 4px 10px rgba(0, 0, 0, 0.1)',
        'one-2': '0px 4px 8px 0px #00000033',
        'one-3': '0px 2px 4px rgba(189, 15, 114, 0.6)',
        'one-4': '0px 6px 20px rgba(0, 0, 0, 0.12)',
        'one-big': '0px 16px 48px rgba(0, 0, 0, 0.22)',
        'drop-big': '0px 8px 30px rgba(0, 0, 0, 0.15)',
        'aoq-my-contract-left': '-4px 0 4px rgba(0, 0, 0, 0.12)',
        'aoq-my-contract-right': '4px 0 4px rgba(0, 0, 0, 0.12)',
        'box-sm': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'box-md': '0px 6px 20px rgba(51, 51, 51, 0.12)',
        'box-lg': '0px 16px 50px rgba(51, 51, 51, 0.2)',
      },
      maxWidth: {
        'screen-xs': screenToPx(SCREENS.xs),
        'screen-sm': screenToPx(SCREENS.sm),
        'screen-md': screenToPx(SCREENS.md),
        'screen-lg': screenToPx(SCREENS.lg),
        'screen-xl': screenToPx(SCREENS.xl),
        'screen-2xl': screenToPx(SCREENS['2xl']),
        'screen-3xl': screenToPx(SCREENS['3xl']),
        6: '1.5rem',
        9: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        21: '5.5rem',
        22: '5.75rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        60: '15rem',
        65: '16.5rem',
        86: '21.5rem',
      },
      letterSpacing: {
        tightest: '-.075em',
      },
    },
    fontFamily: {
      main: [
        '"Inter var"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      proximaNova: ['"proxima-nova"', 'sans-serif'],
    },
    screens: {
      xs: screenUp(SCREENS.xs),
      xsDown: screenDown(SCREENS.sm),

      sm: screenUp(SCREENS.sm),
      smDown: screenDown(SCREENS.md),

      md: screenUp(SCREENS.md),
      mdDown: screenDown(SCREENS.lg),

      lg: screenUp(SCREENS.lg),
      lgDown: screenDown(SCREENS.xl),

      xl: screenUp(SCREENS.xl),
      xlDown: screenDown(SCREENS['2xl']),

      '2xl': screenUp(SCREENS['2xl']),
      '2xlDown': screenDown(SCREENS['3xl']),

      '3xl': screenUp(SCREENS['3xl']),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        // New
        '.container': {
          '@apply px-[15px] mx-auto max-w-full': {},
          width: '1170px',

          // Response
          '@screen xlDown': {
            width: '1110px',
          },
          '@screen lgDown': {
            width: '970px',
          },
          '@screen mdDown': {
            width: '750px',
          },
        },

        // Text
        '.text-main-link': {
          '@apply font-proximaNova': {},
          fontSize: '14px',
          lineHeight: '30px',
          fontWeight: '600',
        },

        // Button
        'button-lg, .button-md, .button-sm': {
          '@apply text-main-link': {},

          border: '1px solid #FFC576',
          color: '#FFC576',
          background: 'transparent',
          textTransform: 'uppercase',
          padding: '10px 30px',
          borderRadius: '2px',
        },

        // Old
        '.table-sticky-right-col': {
          '@apply sticky right-0 z-1': {},
        },
        '.table-sticky-left-col': {
          '@apply sticky left-0 z-1': {},
        },
        '.bg-primary-hover': {
          '@apply bg-primary bg-opacity-6': {},
        },
        '.scrollbar': {
          scrollbarColor: '#ccd3d1',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            '@apply w-2 h-2': {},
          },
          '&::-webkit-scrollbar-thumb': {
            '@apply rounded-lg': {},
            backgroundColor: '#ccd3d1',
          },
        },
        '.circle': {
          '@apply bg-primary w-[32px] h-[32px] ml-[9px] rounded-full mt-0': {},
        },
        '.similar-before': {
          content: "''",
          '@apply w-[75%] h-full bg-one-efe1f8 absolute top-0': {},
          zIndex: -1,
        },
        '.btn-common': {
          '@apply w-full h-10 mt-3 py-0.5 px-1 text-xs font-semibold xl:mt-0 3xl:w-max 3xl:px-6': {},
        },
        // Old Typo
        '.text-h1': {
          '@apply font-proximaNova': {},
          fontSize: '2.5rem',
          lineHeight: '3rem',
          '@screen lgDown': {
            fontSize: '2.375rem',
            lineHeight: '2.875rem',
          },
        },
        '.text-h2': {
          '@apply font-proximaNova': {},
          fontSize: '2rem',
          lineHeight: '2.375rem',
          '@screen lgDown': {
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
          },
        },
        '.text-h3': {
          '@apply font-proximaNova': {},
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
        },
        '.text-h4': {
          '@apply font-proximaNova': {},
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
          '@screen lgDown': {
            fontSize: '1.125rem',
          },
        },
        '.text-h5': {
          '@apply font-proximaNova': {},
          fontSize: '1.0625rem',
          lineHeight: '1.25rem',
          '@screen lgDown': {
            fontSize: '0.9375rem',
            lineHeight: '1.125rem',
          },
        },
        '.text-h6': {
          '@apply font-proximaNova': {},
          fontSize: '1rem',
          lineHeight: '1.25rem',
          '@screen lgDown': {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
        },
        '.text-caption': {
          '@apply font-proximaNova italic': {},
          fontSize: '0.875rem',
          lineHeight: '1rem',
          '@screen lgDown': {
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
          },
        },
        '.text-tiny': {
          '@apply font-proximaNova': {},
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
          '@screen lgDown': {
            fontSize: '0.625rem',
            lineHeight: '1rem',
          },
        },
        '.text-menu': {
          '@apply font-proximaNova': {},
          fontSize: '0.875rem',
          lineHeight: '1.0625rem',
          '@screen lgDown': {
            fontSize: '0.75rem',
          },
        },
        '.text-menu-collapse': {
          '@apply font-proximaNova': {},
          fontSize: '0.625rem',
          lineHeight: '0.75rem',
        },
        '.text-button-l': {
          '@apply font-proximaNova': {},
          fontSize: '0.875rem',
          lineHeight: '1.375',
        },
        '.text-button-m': {
          '@apply font-proximaNova': {},
          fontSize: '0.875rem',
          lineHeight: '1.0625rem',
        },
        '.text-button-s': {
          '@apply font-proximaNova': {},
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
        },
        '.text-hyperlink': {
          '@apply font-proximaNova underline': {},
          fontSize: '0.875rem',
          lineHeight: '1rem',
          '@screen lgDown': {
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
          },
        },
        '.text-body': {
          fontFamily: theme('fontFamily.proximaNova'),
          letterSpacing: '-0.1px',
          fontSize: '0.875rem',
          lineHeight: '1rem',
          ['@screen lgDown']: {
            fontSize: '0.75rem',
            lineHeight: '1rem',
          },
        },
        // New Typo
        '.ds-text-h1': {
          '@apply font-semibold': {},
          letterSpacing: '-0.4px',
          fontSize: '2.5rem',
          lineHeight: '2.75rem',
          ['@screen 3xl']: {
            fontSize: '3rem',
            lineHeight: '3.25rem',
          },
        },
        '.ds-text-h2': {
          '@apply font-semibold': {},
          letterSpacing: '-0.2px',
          fontSize: '2rem',
          lineHeight: '2.25rem',
          ['@screen 3xl']: {
            fontSize: '2.5rem',
            lineHeight: '2.75rem',
          },
        },
        '.ds-text-h3': {
          '@apply font-semibold': {},
          letterSpacing: '-0.2px',
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
          ['@screen 3xl']: {
            fontSize: '2rem',
            lineHeight: '2.25rem',
          },
        },
        '.ds-text-h4': {
          '@apply font-semibold': {},
          letterSpacing: '-0.2px',
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
          ['@screen 3xl']: {
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
          },
        },
        '.ds-text-h5': {
          '@apply font-semibold': {},
          letterSpacing: '-0.2px',
          fontSize: '0.875rem',
          lineHeight: '1rem',
          ['@screen xl']: {
            fontSize: '1rem',
            lineHeight: '1.125rem',
          },
          ['@screen 3xl']: {
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
          },
        },
        '.ds-text-subtitle-caption': {
          '@apply font-semibold': {},
          letterSpacing: '-0.1px',
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
          ['@screen xl']: {
            fontSize: '0.875rem',
            lineHeight: '1rem',
          },
          ['@screen 3xl']: {
            fontSize: '1rem',
            lineHeight: '1.125rem',
          },
        },
        '.ds-text-tiny': {
          '@apply font-semibold': {},
          letterSpacing: '-0.1px',
          fontSize: '0.625rem',
          lineHeight: '0.75rem',
          ['@screen xl']: {
            fontSize: '0.75rem',
            lineHeight: '0.875rem',
          },
        },
        '.ds-text-body': {
          letterSpacing: '-0.1px',
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          ['@screen xl']: {
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
          },
          ['@screen 3xl']: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
        '.ds-text-body-semibold': {
          '@apply font-semibold ds-text-body': {},
        },
        '.ds-text-body-small': {
          letterSpacing: '-0.1px',
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          ['@screen 3xl']: {
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
          },
        },
        '.ds-text-body-small-semibold': {
          '@apply font-semibold ds-text-body-small': {},
        },
        '.ds-text-button': {
          '@apply font-semibold': {},
          letterSpacing: '-0.1px',
          fontSize: '0.75rem',
          lineHeight: '1rem',
          ['@screen xl']: {
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
          ['@screen 3xl']: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
        // EFin
        '.sticky-left': {
          '--tw-shadow': '-4px 1px 10px -3px rgba(0, 0, 0, 0.1)',
          boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        },
        '.sticky-right': {
          '--tw-shadow': '4px 1px 10px -3px rgba(0, 0, 0, 0.1)',
          boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
        },
      });
    }),
  ],
};
