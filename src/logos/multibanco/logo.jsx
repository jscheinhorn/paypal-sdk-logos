/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { SVGLogo, getLogoColors, type SVGLogoProps } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
import { type LogoColorMap } from '../../types';

const LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.DEFAULT ]: {
        primary:   '#373535',
        secondary: '#1866AB'
    },
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#ffffff',
        secondary: '#ffffff'
    },
    [ LOGO_COLOR.BLACK ]: {
        primary:   '#373535',
        secondary: '#1866AB'
    }
};

// eslint-disable-next-line flowtype/require-exact-type
export function MultibancoLogo({ logoColor = LOGO_COLOR.DEFAULT, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> }) : ComponentNode<SVGLogoProps> {

    const { primary, secondary } = getLogoColors(LOGO.MULTIBANCO, LOGO_COLORS, logoColor);

    return (
        <SVGLogo
            { ...props }
            name={ LOGO.MULTIBANCO }
            logoColor={ logoColor }
            render={ () => {
                return (
                    <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="LOGO_MULTIBANCO_2">
                            <path id="bracket_bottom" fill-rule="evenodd" clip-rule="evenodd" d="M15.032 28.9122H27.4697C30.3098 28.9122 30.3381 25.8936 30.0489 24.4033C29.8909 23.4017 28.1887 23.4101 28.0013 24.4033V25.5662C28.0013 26.0973 27.5664 26.5323 27.035 26.5323H15.032H14.0721H3.18896C2.65759 26.5323 2.22288 26.0973 2.22288 25.5662V24.4033C2.03548 23.4101 0.33337 23.4017 0.175316 24.4033C-0.113671 25.8936 -0.0858076 28.9122 2.75449 28.9122H14.0721H15.032Z" fill={ secondary } />
                            <path id="bracket_top" fill-rule="evenodd" clip-rule="evenodd" d="M6.23859 0H24.4543H25.4167C26.7643 0 27.8665 1.16655 27.8665 2.59249V3.83153C27.8665 5.58321 25.4934 5.57655 25.4934 3.84337V3.16652C25.4934 2.736 25.1413 2.38389 24.7105 2.38389H5.49319C5.06267 2.38389 4.71056 2.736 4.71056 3.16652V3.82956C4.71056 5.57162 2.44897 5.55929 2.44897 3.86729V2.59249C2.44897 1.16655 3.55141 0 4.8987 0H6.23859Z" fill={  secondary } />
                            <path id="big_b" fill-rule="evenodd" clip-rule="evenodd" d="M27.3825 14.242C28.7108 14.8668 29.6278 16.1566 29.6278 17.6376C29.6278 19.7256 27.8049 21.4338 25.5764 21.4338H19.3309C18.7467 21.4338 18.2686 20.9861 18.2686 20.4387V8.55595C18.2686 7.9829 18.7381 7.51367 19.3121 7.51367H24.5141C26.704 7.51367 28.4956 9.30356 28.4956 11.4909C28.4956 12.5559 28.0707 13.5262 27.3825 14.242ZM22.721 13.2742H24.704V13.2522C25.6069 13.1136 26.3043 12.3285 26.3043 11.3884C26.3043 10.3513 25.4555 9.50255 24.4185 9.50255H20.4242V19.3631H25.4893C26.5605 19.3631 27.4368 18.4868 27.4368 17.4156C27.4368 16.3445 26.5605 15.4682 25.4893 15.4682H24.704V15.4635H22.721C22.1189 15.4635 21.6262 14.9711 21.6262 14.369C21.6262 13.7668 22.1189 13.2742 22.721 13.2742Z" fill={  primary } />
                            <path id="big_m" fill-rule="evenodd" clip-rule="evenodd" d="M17.2763 20.2468C17.3495 20.935 16.8507 21.5524 16.1625 21.6254C15.4743 21.6986 14.8569 21.2 14.7839 20.5116L13.7569 11.0619L10.1194 20.3018L10.1157 20.3104L10.1155 20.3114V20.3116L10.1054 20.336L10.0972 20.3553L10.0953 20.36L10.0866 20.3792L10.0812 20.3908L10.0726 20.4088L10.0684 20.4172L10.0588 20.4362L10.0553 20.4428C9.98826 20.5693 9.90196 20.6805 9.80111 20.774L9.79741 20.7772L9.77867 20.7942C9.71308 20.8524 9.64059 20.9037 9.56193 20.9478L9.55651 20.9508L9.53283 20.9636L9.53185 20.9641L9.5099 20.9754L9.49979 20.9806L9.48574 20.9873L9.4707 20.9942L9.45763 21.0003L9.44209 21.007L9.42853 21.0127L9.41571 21.0181L9.40412 21.0225L9.39746 21.0252L9.38686 21.0292L9.37034 21.0353L9.36072 21.0385C9.23941 21.081 9.11588 21.1036 8.99333 21.1081L8.97853 21.1086L8.96078 21.1088H8.94796H8.93489L8.91763 21.1086L8.90185 21.1081C8.765 21.1031 8.62642 21.0753 8.49155 21.0225L8.47478 21.0159L8.47059 21.0139L8.45382 21.0072L8.43755 21.0001L8.42448 20.9939L8.41042 20.9875L8.39538 20.9804L8.38675 20.9759L8.36382 20.9643L8.3616 20.9628L8.34212 20.9522L8.33103 20.9463C8.26223 20.9076 8.19837 20.863 8.13944 20.8134L8.13475 20.8092C8.1207 20.7971 8.10689 20.7853 8.09333 20.7727L8.09259 20.7717C8.08198 20.7619 8.07138 20.7518 8.06127 20.7417C8.05116 20.7313 8.04081 20.721 8.03094 20.7104L8.0302 20.7094C8.01763 20.6958 8.00555 20.6822 7.99346 20.6679L7.98927 20.6633C7.93971 20.6043 7.89533 20.5405 7.85661 20.4717L7.85045 20.4608L7.8396 20.4411L7.83861 20.4386L7.82678 20.4162L7.82259 20.4073L7.81544 20.3925L7.80878 20.3782L7.80286 20.3651L7.79571 20.3489L7.78856 20.3323L7.78708 20.3282L7.78018 20.3114L4.13875 11.0619L3.11177 20.5116C3.03853 21.2 2.42135 21.6986 1.73316 21.6254C1.04472 21.5524 0.546149 20.935 0.619382 20.2468L1.83007 9.10577L1.83056 9.10282L1.83105 9.09813L1.83056 9.09788C1.84511 8.96819 1.87248 8.83898 1.91193 8.71224C1.95015 8.5892 2.00119 8.46788 2.06431 8.34953C2.37352 7.76884 2.94237 7.3615 3.62119 7.26756L3.62366 7.26706C3.64634 7.2641 3.66927 7.26164 3.69196 7.25967C3.79823 7.24857 3.90401 7.24536 4.00807 7.2503L4.013 7.25054V7.2503C4.14837 7.25671 4.27511 7.27372 4.39198 7.30084C5.03949 7.45199 5.5896 7.90249 5.84851 8.5601L8.94796 16.4325L12.0472 8.5601C12.3061 7.90249 12.8562 7.45199 13.5037 7.30084C13.6203 7.27372 13.7471 7.25671 13.8827 7.2503V7.25054L13.8876 7.2503C13.9919 7.24536 14.0979 7.24857 14.2045 7.25967C14.2269 7.26164 14.2493 7.2641 14.272 7.26706L14.2745 7.26756C14.9533 7.3615 15.5224 7.76884 15.8316 8.34953C15.8945 8.46788 15.9458 8.5892 15.9837 8.71224C16.0232 8.83898 16.0506 8.96794 16.0651 9.09788L16.0646 9.09813L16.0651 9.10282L16.0656 9.10577L17.2763 20.2468Z" fill={ primary } />
                            <path id="multibanco_o" fill-rule="evenodd" clip-rule="evenodd" d="M28.8133 32.8943V32.8955H28.8128H28.8121V32.8943C28.5653 32.8943 28.3407 32.9914 28.1784 33.1473C28.0189 33.3004 27.92 33.51 27.9197 33.7388H27.9212V33.7393V34.3631V34.3639H27.9197C27.92 34.5925 28.0189 34.8016 28.1779 34.9547C28.3407 35.1108 28.5653 35.2082 28.8126 35.2082V35.2069H28.8128H28.8138V35.2082C29.0609 35.2082 29.2853 35.111 29.4478 34.9547C29.6071 34.8018 29.7062 34.5925 29.7062 34.3634H29.705V34.3631V33.7393V33.7386H29.7062C29.7059 33.5098 29.6071 33.3004 29.448 33.1475C29.2853 32.9914 29.0607 32.8943 28.8133 32.8943ZM28.8128 32.2256H28.8133V32.2271C29.2404 32.2271 29.6293 32.3955 29.9111 32.666C30.1961 32.9402 30.3732 33.3196 30.3734 33.7386H30.3747V33.7393V34.3631V34.3634H30.3734C30.3732 34.7826 30.1961 35.1623 29.9108 35.4365C29.6293 35.707 29.2407 35.8751 28.8138 35.8754V35.8769H28.8128H28.8126V35.8754C28.3855 35.8754 27.9967 35.707 27.7148 35.4362C27.43 35.1623 27.2528 34.7828 27.2525 34.3639H27.2513V34.3631V33.7393V33.7388H27.2525C27.2528 33.3199 27.43 32.9399 27.7153 32.666C27.9969 32.3955 28.3855 32.2273 28.8121 32.2271V32.2256H28.8128Z" fill={ primary } />
                            <path id="multibanco_c" fill-rule="evenodd" clip-rule="evenodd" d="M26.8754 35.2069C27.0603 35.2069 27.2102 35.3568 27.2102 35.5418C27.2102 35.7267 27.0603 35.8769 26.8754 35.8769H25.8886H25.8881V35.8754C25.5244 35.8754 25.194 35.7265 24.9548 35.4873C24.7166 35.2491 24.5687 34.9192 24.5682 34.5557H24.567V34.555V33.5475V33.547H24.5682C24.5684 33.1833 24.7169 32.8526 24.9563 32.6134C25.1947 32.3755 25.5244 32.2273 25.8876 32.2271V32.2256H25.8886H26.8754C27.0603 32.2256 27.2102 32.3758 27.2102 32.5607C27.2102 32.7456 27.0603 32.8955 26.8754 32.8955H25.8886H25.8876V32.8943C25.7093 32.8943 25.5461 32.9683 25.4273 33.0871C25.3089 33.2055 25.2357 33.3682 25.2357 33.547H25.2367V33.5475V34.555V34.5557H25.2357C25.2357 34.7342 25.3094 34.8975 25.4285 35.0163C25.5466 35.1344 25.7093 35.2082 25.8881 35.2082V35.2069H25.8886H26.8754Z" fill={  primary } />
                            <path id="multibanco_n" fill-rule="evenodd" clip-rule="evenodd" d="M21.6444 35.5418C21.6444 35.7267 21.4945 35.8766 21.3095 35.8766C21.1246 35.8766 20.9744 35.7267 20.9744 35.5418V32.7725V32.7713C20.9744 32.752 20.9759 32.7328 20.9791 32.7145C20.9835 32.6768 20.9927 32.6406 21.0055 32.6061L21.006 32.6051L21.0055 32.6048C21.0124 32.5863 21.022 32.5664 21.0331 32.5449L21.0339 32.5439L21.0331 32.5437C21.0891 32.4421 21.1801 32.3632 21.2947 32.3237C21.31 32.3188 21.3253 32.3144 21.3408 32.3114C21.3527 32.3087 21.3645 32.3062 21.3763 32.3045L21.3791 32.304V32.303C21.4015 32.2998 21.4284 32.2983 21.4592 32.2991H21.4617H21.4676H21.4678C21.6052 32.3045 21.7334 32.3681 21.8219 32.4808L23.6044 34.754V32.5604C23.6044 32.3755 23.7546 32.2256 23.9395 32.2256C24.1244 32.2256 24.2743 32.3755 24.2743 32.5604V35.3176C24.2743 35.4634 24.2088 35.595 24.0995 35.6843C24.0788 35.7011 24.0559 35.7168 24.0312 35.7307C24.0179 35.7381 24.0039 35.7447 23.9895 35.7511L23.9859 35.7526L23.9851 35.7528C23.9762 35.757 23.9671 35.761 23.9575 35.7642L23.9565 35.7647V35.7642H23.9563L23.956 35.7639L23.9538 35.7647C23.8322 35.8066 23.7045 35.7977 23.5948 35.7445C23.5802 35.7383 23.5659 35.7309 23.5516 35.722C23.5289 35.7082 23.5065 35.6912 23.4853 35.6725C23.472 35.6606 23.4577 35.6458 23.4426 35.6278L23.4315 35.615L23.4308 35.6143L23.4311 35.614L23.4269 35.6088L21.6444 33.3362V35.5418Z" fill={ primary } />
                            <path id="multibanco_a" fill-rule="evenodd" clip-rule="evenodd" d="M20.6191 35.5011C20.6415 35.6845 20.5108 35.8517 20.3271 35.8742C20.1437 35.8966 19.977 35.7657 19.9545 35.5822L19.8367 34.6364H18.676C18.4911 34.6364 18.3412 34.4864 18.3412 34.3015C18.3412 34.1166 18.4911 33.9664 18.676 33.9664H19.7533L19.7228 33.7208L19.7223 33.7181C19.7213 33.7102 19.7205 33.7023 19.7203 33.6947C19.7117 33.6385 19.6991 33.5813 19.6816 33.5236C19.6621 33.459 19.6389 33.3995 19.6128 33.347C19.4799 33.0814 19.2395 32.8955 18.9354 32.8955H18.9322V32.8943C18.8743 32.8943 18.8176 32.9014 18.7638 32.9145C18.7133 32.9266 18.6632 32.9456 18.6141 32.9705C18.3572 33.1014 18.1851 33.3874 18.1481 33.7169L17.9385 35.5783C17.9183 35.762 17.7529 35.8944 17.5694 35.8742C17.3862 35.8539 17.2538 35.6885 17.274 35.505L17.4834 33.6436C17.5452 33.094 17.8503 32.608 18.3109 32.3738C18.4014 32.3279 18.5002 32.2909 18.6068 32.2655C18.7098 32.2404 18.8186 32.2273 18.9322 32.2271V32.2256H18.9354C19.5161 32.2256 19.9671 32.5649 20.2092 33.0487C20.2558 33.1419 20.2941 33.2368 20.3227 33.3327C20.3483 33.4183 20.3678 33.5095 20.3814 33.6054C20.3838 33.6158 20.3858 33.6261 20.387 33.6367L20.3875 33.6394L20.6191 35.5011Z" fill={  primary } />
                            <path id="multibanco_b" fill-rule="evenodd" clip-rule="evenodd" d="M14.6994 32.8955V34.0303V35.2069H15.9932H15.9939V35.2082C16.1088 35.2082 16.2141 35.1603 16.2913 35.0831C16.3678 35.007 16.4151 34.9017 16.4151 34.7865H16.4141V34.786V34.785H16.4151C16.4151 34.677 16.3727 34.5769 16.3031 34.5015L16.2903 34.4891C16.2131 34.4117 16.1079 34.3639 15.9937 34.3639V34.3651H15.9932H15.6709H15.6699H15.5476C15.363 34.3651 15.2128 34.2147 15.2128 34.0303C15.2128 33.8458 15.363 33.6952 15.5476 33.6952H15.6699H15.6709H15.7C15.7969 33.6878 15.8855 33.6441 15.9523 33.5778L15.9528 33.5783L15.9533 33.5778C16.0258 33.5051 16.0711 33.4052 16.0711 33.2957H16.0699V33.2955V33.2952V33.2945H16.0711C16.0711 33.1855 16.0255 33.0854 15.9523 33.0122C15.8798 32.9397 15.7797 32.8943 15.6704 32.8943V32.8955H15.6699H14.6994ZM14.0297 34.0303V32.5752V32.575C14.0297 32.5276 14.0396 32.4825 14.0571 32.4418C14.0751 32.3982 14.1017 32.359 14.1348 32.3267L14.139 32.323L14.1387 32.3227C14.1954 32.2685 14.2709 32.2322 14.3587 32.2271C14.3653 32.2266 14.372 32.2261 14.3784 32.2263V32.2256H14.3794H15.6699H15.6704V32.2271C15.9648 32.2271 16.2324 32.3474 16.4257 32.541C16.6185 32.7338 16.7381 33.0003 16.7384 33.2945H16.7398V33.2952V33.2955V33.2957H16.7384C16.7384 33.5043 16.6777 33.6991 16.5739 33.8638C16.6427 33.9075 16.7065 33.9583 16.764 34.0155C16.7711 34.0226 16.7778 34.0303 16.7845 34.0379C16.9687 34.2325 17.0823 34.4958 17.0826 34.785H17.0838V34.786V34.7865H17.0826C17.0826 35.0866 16.9598 35.3593 16.7623 35.5568C16.566 35.7531 16.294 35.8751 15.9939 35.8754V35.8769H15.9932H14.3646C14.1796 35.8769 14.0297 35.7267 14.0297 35.5418V34.0303Z" fill={ primary } />
                            <path id="multibanco_i" fill-rule="evenodd" clip-rule="evenodd" d="M13.7486 35.5418C13.7486 35.7267 13.5986 35.8766 13.4137 35.8766C13.2288 35.8766 13.0789 35.7267 13.0789 35.5418V32.5604C13.0789 32.3755 13.2288 32.2256 13.4137 32.2256C13.5986 32.2256 13.7486 32.3755 13.7486 32.5604V35.5418Z" fill={  primary } />
                            <path id="multibanco_t" fill-rule="evenodd" clip-rule="evenodd" d="M11.6595 35.5418C11.6595 35.7267 11.5095 35.8766 11.3246 35.8766C11.1397 35.8766 10.9898 35.7267 10.9898 35.5418V32.8955H10.0368C9.85182 32.8955 9.7019 32.7454 9.7019 32.5604C9.7019 32.3755 9.85182 32.2256 10.0368 32.2256H11.3246H12.6125C12.7974 32.2256 12.9473 32.3755 12.9473 32.5604C12.9473 32.7454 12.7974 32.8955 12.6125 32.8955H11.6595V35.5418Z" fill={  primary } />
                            <path id="multibanco_l" fill-rule="evenodd" clip-rule="evenodd" d="M10.1963 35.2069C10.3812 35.2069 10.5312 35.3568 10.5312 35.5418C10.5312 35.7267 10.3812 35.8769 10.1963 35.8769H9.27165H9.2714V35.8754C8.92472 35.8754 8.60984 35.7336 8.38176 35.5058C8.15491 35.2784 8.01387 34.9645 8.01362 34.6181H8.01239V34.6171V32.5607C8.01239 32.3758 8.16231 32.2256 8.34724 32.2256C8.53217 32.2256 8.68209 32.3758 8.68209 32.5607V34.6171V34.6181H8.68086C8.68086 34.7794 8.74768 34.9268 8.85543 35.0346C8.96244 35.1413 9.10965 35.2082 9.2714 35.2082V35.2069H9.27165H10.1963Z" fill={ primary } />
                            <path id="multibanco_u" fill-rule="evenodd" clip-rule="evenodd" d="M7.03116 32.5604C7.03116 32.3755 7.18108 32.2256 7.36601 32.2256C7.55094 32.2256 7.7011 32.3755 7.7011 32.5604V34.3718V34.3723H7.69963C7.69963 34.7863 7.53023 35.1625 7.25776 35.435C6.98628 35.7065 6.61075 35.8749 6.197 35.8751V35.8766H6.19626H6.19576V35.8751C5.78176 35.8751 5.40549 35.706 5.13302 35.4333C4.86154 35.1618 4.69313 34.7863 4.69289 34.3728H4.69141V34.3718V32.5604C4.69141 32.3755 4.84157 32.2256 5.0265 32.2256C5.21143 32.2256 5.36135 32.3755 5.36135 32.5604V34.3718V34.3728H5.36012C5.36012 34.6013 5.45456 34.8102 5.60669 34.9623C5.75809 35.1135 5.96669 35.2079 6.19576 35.2079V35.2067H6.19626H6.197V35.2079C6.42582 35.2079 6.63491 35.1135 6.7868 34.9613C6.9382 34.8099 7.03239 34.6013 7.03239 34.3723H7.03116V34.3718V32.5604Z" fill={ primary } />
                            <path id="multibanco_m" fill-rule="evenodd" clip-rule="evenodd" d="M4.5672 35.5028C4.58889 35.6862 4.45747 35.8527 4.27426 35.8744C4.09057 35.8958 3.92413 35.7649 3.90243 35.5812L3.61542 33.1694L2.59213 35.5422C2.51914 35.7121 2.32237 35.7905 2.15273 35.7175C2.07062 35.6825 2.00996 35.6182 1.97742 35.5422L0.954128 33.1694L0.666868 35.5812C0.645169 35.7649 0.478731 35.8958 0.295279 35.8744C0.111827 35.8527 -0.0193515 35.6862 0.00234713 35.5028L0.33547 32.7024C0.357169 32.5195 0.468621 32.3693 0.628155 32.2869C0.649114 32.2758 0.671059 32.2662 0.693251 32.2578C0.701881 32.2544 0.710265 32.2514 0.719142 32.2487C0.747498 32.2398 0.780539 32.2324 0.817772 32.2275V32.2278L0.820484 32.2275L0.823443 32.227C0.998265 32.2048 1.17062 32.2613 1.2912 32.3747C1.31536 32.3976 1.33829 32.424 1.3595 32.4534C1.3738 32.4736 1.38711 32.4945 1.39846 32.5162C1.40561 32.5283 1.41177 32.5404 1.4172 32.5535L2.28465 34.5648L3.1521 32.5535C3.22385 32.3875 3.37131 32.2741 3.54391 32.2361C3.57695 32.229 3.60999 32.2241 3.64229 32.2226C3.6672 32.2213 3.69185 32.2213 3.71528 32.2228L3.7175 32.2231C3.72563 32.2236 3.73377 32.2243 3.74216 32.2253L3.74487 32.2258L3.74462 32.2268L3.7461 32.227C3.92511 32.2497 4.0775 32.3503 4.16306 32.4945H4.16281C4.18081 32.5246 4.19536 32.5567 4.2072 32.59C4.21435 32.6109 4.22076 32.6326 4.22544 32.6556C4.22889 32.6699 4.23161 32.6844 4.23333 32.6995L4.23383 32.7024L4.5672 35.5028Z" fill={ primary } />
                        </g>
                    </svg>
                    
                );
            } }
        />
    );
}
