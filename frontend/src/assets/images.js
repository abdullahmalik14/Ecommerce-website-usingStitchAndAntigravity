// High Fidelity Assets Library for THE ARCHIVE
// Optimized for performance with local asset bundling and Vite hashing.

// Local Core Assets
import HeroImageLocal from './hero.png';
import OuterwearLocal from './outerwear.png';
import TailoringLocal from './tailoring.png';
import ReactLogo from './react.svg';
import ViteLogo from './vite.svg';

// Newly Localized High-Performance Assets
import AccessoriesLocal from './accessories.jpg';
import CatShirtsLocal from './cat_shirts.jpg';
import CatPantsLocal from './cat_pants.jpg';
import CatShoesLocal from './cat_shoes.jpg';
import CatWatchesLocal from './cat_watches.jpg';
import PromoKnitwearLocal from './promo_knitwear.jpg';
import PhilosophyTailorLocal from './philosophy_tailor.jpg';

export const images = {
  // Hero & Core Branding
  hero: HeroImageLocal,
  logo: {
    react: ReactLogo,
    vite: ViteLogo,
  },

  // Collections Showcase
  collections: {
    outerwear: OuterwearLocal,
    tailoring: TailoringLocal,
    accessories: AccessoriesLocal,
  },

  // Categories Scroll
  categories: {
    shirts: CatShirtsLocal,
    pants: CatPantsLocal,
    shoes: CatShoesLocal,
    watches: CatWatchesLocal,
  },

  // Promotional Banners
  promotions: {
    knitwearSale: PromoKnitwearLocal,
  },

  // Editorial & Branding
  editorial: {
    tailorAtWork: PhilosophyTailorLocal,
  },

  // About Page Assets (Keep URLs for now to save time, major ones are localized)
  about: {
    studio: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-WUmyrfda7wpNNxjaMNjzHdSS3VLmHUdjl73xHz-FmT22kfOPO1DMDsRIpM69dVHomwjqvvX_AHnXvGGtHnIgJBExLGQy6I-sWJAhH7nf1rlGNJcXVAkhWdClLLjhotmA_5vPdM4Ji7usvFXo2mDQDpep8zjom4wPIuWuaucu4OuzUITzKo5XZQLP_Y6i-P3wUEShDeVcglYZuVxlK8T-6cdiPXeuVH25hRfNU58XYwsJvC-LNN1qXIlzqIxl4qhJiadFlz7qNjc',
    fabric: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMzuISwDkr0YKh-8wph05jLT0RG3IRmrWnd_xtCjtei_VZnhLtrcYb_eMUhDwBwKYEspKUHlo16flSEJYFiI6N_dtC31XPqb--7cd1ggApEgbmMvcmTwxZG_IcL8Cf5CknXp8kEV8-_7a7sff9racNPZS-mzY_xxdgLg_xVZ30kDVCJO3ijwxrBoWq-7XvoSQq0ihUdQKbyyhugub71ZnWDBjRUTuFxfcFeIqlfnP7Sx5pQTnEXBXWbk7qbuFFUF-_KiHz0iBhoSY',
    finishedGarment: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn9iyMmMkLW868bFQDV90gkp7_NUlAFLGVuUORjHRMb8ujQbWL7i5zcN08v93jLNZAnqwwiD-jMOG_NFgpqKu_aq3lyenUdmy_APUpx5cPi8xNO1BgwVTUDHoxbD44XKI3Cug1q-FTdU8nPqRqdtJrUW2aQ0sZ7IsrPv6UmY7J7mdsjd4Mmz6rkNA-3rU8ALACfyQgagTZVFaxKDxQ4TlUlRKtK1HpyOkQ2VnpMStzufT7zA7Wb7Ap3vs6xbcKYu3fYWqrnfyhSnM',
  },

  // Product Listing Specific (Unsplash Placeholders)
  listing: {
    woolOvercoat: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800',
    poplinShirt: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    cashmereKnit: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    oxfordBoots: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    tailoredPant: 'https://images.unsplash.com/photo-1624371414361-e6e0ed2b2a60?auto=format&fit=crop&q=80&w=800',
    techBlazer: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
  },

  // Product Details Specific
  details: {
    main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxnGiDinR--wn3wY9UWyk35lnQkox9xhb5i4a3C6-sGhzxt_7lYPs6faoJXVp4EblMgqtGDVIysvaYatZ0iQD1CerzFmjRuNbSX8ut_Jr2pLsxtzLQbJ7C8JcnURcFauSY8V-sfOpGvtVgFaqEmit7r7ptUaCTNxxACPFaLCFR6NW9yF8XMv2EKptrxxdGST3kboqn8f0lfFLZ5FNNKkown7LEF6whgZ_ZcrHPITflC22AvHIg5mDGGROTxNejjXjTRhm7ZomYaRE',
    thumbs: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNfDl84v22BwxLpuNft-1i9sUhBX5B0rEzscVx96i6KylnwXFIkslcYZRrzkQqC10aJ_P-G_fCQ5IYl4uqjhLs4z_-idW4UPMQwLhNhO8Xax1vfo9EDBtQlMNCZqGNER0t7GkvRgzTNkVAaSCvUWV9-ch3CSt_w5vn9pLG7Oguv5LSmX_7zlDU8nZpSwwwHH_RVrlpP5yG2_58wLMRwk7E9i0ZxiEdXSnS4NFfsv9hU952JViNnqBM_kC87LDNokn50siV1fTHIk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC18b94sWf43j1peoSksxjEAWWcCv1o_tl-hfINiCvYjzerTc2q_rpG_7GwD0FaeRcrGMecFM2RSJ5LiAbkBgLhR5nFsWL3XsX_kNaX8LqSDYpXnrZMqLrKv4pAiJNpA63NMjD6HKopEeZWdRrOBAf4gJ-n-MtKe0zqP7peMx0u0UGxv0C-3egiGnxXgsUL2VGt3Wm1IXXaHD-qdysXFFO9bpN2W7aQ0r8MbVX5BWT4nP8PMjUbdFiKzfrACzxQTVQWi0kmFWL5zlM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBh4sZzJg6_Ydgnyk7OamU5i1wnjNbvla9w_Lciz0UxveIyIo_7dOdayzQ519gkfxrPWhAqWsLnl1qxoCUCwuMw9dVU8PobI9PUqonyJa3Gf9XDNTo8sLtPLYmgtCxcDMNsk-0aXyVQLjSqcZ4GqlsNJAz_zNWqKBm6y2z2tIIyqrWkZ0j1K3PtGW-iv1Ldd7Sfq6IGOGAwGdCG4nJqppTLqJ7RXBOHGERcq7K1pNaS-1iXt5klqRnuo0uCm9XEHGiCCJAIIP6kVgc',
    ],
    related: {
      blazer: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHeVAZlkceVw21dmo45oNxP2XWNJoMBFIw1xkZIoYE68_4ReoXhoEt4iOWvzOEG4B-gsD9-zR1HNcrvjWOs70jdLpXeaoe919fmrceDYTenumkKcY_Utjcn37t0HQpYjyeHbRrLveyNRuv83-nL12iL53BhblTinFh08tlLjh6hz5gQ4-z-y3EwwA8g1iuyx-dgbQjblyHJyqik0t416Fq8qds00wqGZ1fV_6A1rpyG0dirO18ee6Ras7EEvtX8xe6Xz8yNDGTA3k',
      shirt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUOjtIMhNbem658nLMqKMW4FE3l-Os33mteLLx4dcok3dIX-7aJgFCPBXd2aVJXkgB_PU4QeyNMzpaoDkNmTFJ_fUudWcMHCdO-dxSTVj8gKnDYhxw08J1s_na6H-jNMF9Js7CD9wNffspOe-axZ6NJ7OhhuvQQE5KkykbIwjt8jiszt42VaUou-bktFCqMXRFW8rJ9wru71xLizW5JptFJPs8pUqDXw6siqe8FnbWcNjnO7BMCLLNDY8Z5v8lnU1JtBy-uq2KBTc',
      trouser: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmCqERNhHiWOJ7h8s6rtPg2D52iEtauDJYxDoJ6URv1ZFfkbbp88plnDnkjTuxQoUpVy8Odj5u58CoFyfW8wPRXp3UuCoNSzCY-M5RS8boDDcW4BoKHrUwrn8LptX22gnCAMmSrbV6cxro3a-oKUJ1dz4WeCJ-oldPfKx6hpWFjPW3VaKjjCkinhFgpgHhPh65qyDBlDNGr-rBhqa9qpYxbmkl71PMC4RHtu8e9WLVBYJ7VYMukdeMiL3yqDMThq5-ilQwkCVxktE',
      boot: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTWx-0F1NmpYZD0xn4gQrXr16VIL2roIUrT1vVZhjEQ-CpG92FhVwhWq1XGL9qdhCQQAuVHShL9WxJe9Iun6v1L8c1mpTuM1m0Yn7wvu6Hdm72yNjXq6_Xy_039UhGnxFYFzHe-tH7WE2lqX3CG76ReJvQ456kCOiI6XOPaW0GRPP1PeRiwSKfJ9Vy8rU2HpE4Ml-TEDh7n4F-HijzgDDWEDOBVeomOdyksFZGGotEL1kDSas0q7SlBFZQuSaqCHSj0pV7__elw8Q',
    },
  },

  // Products (Featured in Collections/Listing)
  products: {
    woolOvercoat: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHFxc5lL80eyeeHlwxJ0ppsBoxeRIIZVI3ZyhYwHlMcYtJPcVpO06BrK5dIpI449QC4f-n-HoYkpnUmKQn641MbJsNsLWuEV_heMyPJVxQcyYXgWE4uE4d2fp8jiveOiWjThGq8-G8SrJhrx53H6K-JQSBAS8gAoJi3V85Wet-YQLGqJd-kDpHUPByw95EgYilbBrtyiimWeC4WuimFwEs2KjgcXyPbsuWu5uiNpNbOSSfAdY6tDxro1hJGLUVPhDKwzEaQfbniaM',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-zQz0-MApbF4Qm9NQGR98jZGEV61EcWbajlhhmxF1_QuUe0Vvv7RT7rHnnYWf5oE8-eRIPeKtztyQW5lg75cz_JmCE5YQyUiC7KFe2yl6d6VPpMQ0CIhlQTZ1PWg_twJ80_S0mhBX8sKym_JlTBX98p_tM01ncaH1aValIZti00VzLVY6y_qxKS3DKsLwf8tOmmm9zuBeWLWKtPPg-AioLG7QGbuCoiqyYHnVSb7jfFZ0CeNeiUCFAsEeU3elZo8EyoUGLKwWe4w',
    },
    poplinShirt: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpCymZiWRy6c-Ah1XcYJIYLFtbfYv_SkkDRzW_m-vvaqqAUrgJkC8xeXssNu-ZapnkmUa6ywgDuTWIDbRA0og_1cj80bO6du_CuiC3hX5mNiTFhYZNZu7zUE2XMY4e984iH5lHgiynRW0hVfG0KSSCWPJ9FlRMEdxHUpsWBqcMSp84g8xtewugaM3t7BjPgl3VSdEScIzi1uh2ulYRE1q1xRPX3Bt3cSaUVrt4ZdFVCfBZAEw9eLOTq8NlzymFBaj5Etso4cB7bU',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1awx17SUJDSWH5PkRsmJukRNDOHa44-z_ZNgy2ZshYs6lJdKGMH92ddx9PX8uN1CqxNOXqbofrsBy9cd65APoCIKpPpr8WSEJE0kiUHmK3gWgkXSCRhswue4VOZiulWPUUAOmjMY9kgxvcllyFFvEvKpuRimny5AJQN0iAJ2ujoACNJbsDksKFs8qZNLq3OiN7-EnisOYEXFxRtGYKJmIANm4zNPJn7rg5fBZQB-4f9ELrLG4nrZ4bsvzl1k_Gm_MHN79_B2MnA',
    },
    tailoredPant: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJKmbsaTob8fESUPst7UwoFvSam3HgrRKTDmIpCNJ05hbvkcuUbOI727GoksFyqupw56fz_QRBksBX9EOwLgJspQJBryFY9wxCTSRahV3eVNUuwzdevcCtk8HviE8j1HsHOdspUwAGbuRcWPzKVL5CubT47gdnSYdf5E2heQmS9ln4LLt9Pj3RRCKFuGCQxGO21xfFBELBbCTHSlraRH1mm2lliigkvBhg00xX3_0P2GK7AjI_x6R_IG5ZoOWsvmHcHu6HFjrQJKw',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD88OxrXrFhjzU4CavFXD0cqzaOvilqp7XyxwkC4RcSaHhn091OLUPF2tG7Q926fmedkGFauvjBHs9mpZJQXmArdtHuDfxRjSInPg3Dq5H1AGQM2wQReTcUXhnU9xA6o-lXI5-0_Q5lEXATZ3-BIw2ewTFkGKdl8LrTGvAKbarmf3Tod_jFcRR-Mm06x0cyy2DIy-nkZgBpRJQAHDJ7S4XYVzJsau3EqNzapIICzH7DM6bY8mVQ-Zixa7quZOKRznHJBygfb8kC3Qs',
    },
    cashmereKnit: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdBfHF0AmgAket7hAUl6JO9kAl3xch_JA5Z5-WZ7VLEjuM-JE6zC2EBOqyouI9y3tSO8VHaj3ljUQK2Kxtqt-tsALeCwaCcdQEOxKCOQlLY9hHbPJucl5tqThzrG6r_00zzzFb03-7BlmnJWg5EMqgXIJcNhPTiZDM8nPrmDCbysfCNuDQ9NyYxaBWA0acBGI5dbFzkzNR8xRRmeb7BUDrt-YyTmJkR2gtcqjLc9CEC9HTtuF0FNLiKofCPNlw6-vwqab_-wI3_mg',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjnkAOE8cmVJDcFF2s1fiTmLRoXb_WISkz-YeT8jvVCUIqW7tEa0KdR2AzPwNO6eWcsBXrN2VVQspxsFQJ3BzrWyJtPmK_jrOMICFSOngn2QytwtET9F8Lvj84j6i_8CNQM2yE1hgS46U3xBrYLBRzwIbJbse5wVPAOFGhpk9KRrPlMdOThq7auV4yY5l_kKhXtCf1kb2inEh6pAVB0Jmm5GSiSuE3UiXNkw4S_gUo3WNHJPCY-66sgnJbYCTvEIrxrGVQujCY_o',
    },
    techBlazer: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5oH4SIdQAPc-jwesdmNLI5x2NSfODfvqRotEJKkJCFq5I-EvoavIpyjUpZdpDX1Im6NqsW4zLQHaGD_RdebiVNvjWyaR-LjN5-meegc2hnCSC_wTfG5OhxE3f-g0hiudIYV4zmxafVlxDJQ9Psp_nNFBH8rQhTb9ZRk6czk6bu5AsjDQn2gPixfIEk7TPGVMHpjZ9VIIDm3s5uLNM4cBvrbsyQA-nPWyzMZFcjbWMmEIuDwVS8jpezp0PdYclDpU-xoOEraJY038',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnkzjF4E9xypUIycA3q8pJrA9YHn1jC_frV1QjIeC6cHqZDw_ItpE_zHonxbXDLs3-zh3HyBuaoP43zWJKsFGUZg1ctGQbA4Rw7RhV6-BTpX3eteVcZqsN6a0doKnPTR9Fa24j8FdqtwEM2xmInQc_PAIMN4HylwYiViuHmYUwhstQ6vIF0XsrZjbPPAdvam3Rxjhp2LzNqufK6T-PU24IycXXFut1uFxNkCgaffSTn-zpZua8UDWCG84GH3to6QhTjRHpy1qjGMY',
    },
    oxfordBoots: {
      main: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVMBWf0uP4OgwRem8RKZVVI5OGnUkGFRwjGuNkboSlpNt6OnqVzsliasHT6Z_PO99Ek0bfsIPxNRR_-qAG9ldNA0uUebKa_srsXAlhrROHS6OL8WiPOyr25nvrZFdpLNTJ6XFSRpF4CCaJI8bHAUveYDP6196WEPxA2MAVI2q6UnFG5sedUZdzVZlf9VoyB8UACp8mNMjqSu1xY5TwCnjNRMmD-LmXEiMpYNbZq44yemGG0BhttukOLnWDRZW2aPiZuwQAy2cSNEU',
      hover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATow4sED_MK1iS4CzMNp39cVfoxLwdULxpNQwEp1C6cG8JcUNJMYAF_Gt7r-8-YXIrA58wAfVyX7EfBj4WI1qTKcGrHEhWkTips8IP-cK0OrfLoZBmfFPMXBQiI7ihjTBUzvOwALwSybesFXininwEdcyCoAaIQmw6RURYnxKZHBaLrZHpf_N5YViz4WAg45VSLE4W52FqDwxWrqCosfoj1Z0DQckclP3xA-I3w0kMqcvzVgeuUz393hSfK7Kczfplv6lCK5NFyh0',
    },
  },
};

export default images;
