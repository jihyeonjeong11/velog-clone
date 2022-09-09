src
├ App.css
├ App.tsx
├ GlobalStyles.ts
├ components
| ├ auth
| | ├ AuthEmailForm.tsx
| | ├ AuthEmailSuccess.tsx
| | ├ AuthForm.tsx
| | ├ AuthModal.tsx
| | ├ AuthSocialButton.tsx
| | ├ AuthSocialButtonGroup.tsx
| | └ __tests__
| |   ├ AuthEmailSuccess.test.tsx
| |   ├ AuthForm.test.tsx
| |   └ __snapshots__
| |     └ AuthForm.test.tsx.snap
| ├ base
| | ├ BodyTransition.tsx
| | ├ ConditionalBackground.tsx
| | ├ FloatingHeader.tsx
| | ├ Header.tsx
| | ├ HeaderLogo.tsx
| | ├ HeaderUserIcon.tsx
| | ├ HeaderUserMenu.tsx
| | ├ HeaderUserMenuItem.tsx
| | ├ PageTemplate.tsx
| | ├ ThemeToggleButton.tsx
| | ├ __tests__
| | | ├ HeaderLogo.test.tsx
| | | ├ HeaderUserIcon.test.tsx
| | | └ __snapshots__
| | |   └ HeaderUserIcon.test.tsx.snap
| | └ hooks
| |   ├ useHeader.ts
| |   ├ useThemeEffect.ts
| |   └ useToggleTheme.ts
| ├ common
| | ├ AdFeed.tsx
| | ├ Button.tsx
| | ├ DragDropUpload.tsx
| | ├ EditRemoveGroup.tsx
| | ├ FlatPostCard.tsx
| | ├ FlatPostCardList.tsx
| | ├ HideScroll.tsx
| | ├ HorizontalTab.tsx
| | ├ LabelInput.tsx
| | ├ MarkdownEditor.tsx
| | ├ MarkdownRender.tsx
| | ├ OpaqueLayer.tsx
| | ├ PaginateWithScroll.tsx
| | ├ PasteUpload.tsx
| | ├ PlainLink.tsx
| | ├ PlainNavLink.tsx
| | ├ PopupBase.tsx
| | ├ PopupOKCancel.tsx
| | ├ PostCard.tsx
| | ├ PostCardGrid.tsx
| | ├ PostLink.tsx
| | ├ PrivatePostLabel.tsx
| | ├ RatioImage.tsx
| | ├ RequireLogin.tsx
| | ├ RoundButton.tsx
| | ├ ScrollingPagination.tsx
| | ├ SelectableList.tsx
| | ├ SetupAdFeed.tsx
| | ├ Skeleton.tsx
| | ├ SkeletonTexts.tsx
| | ├ SorterButton.tsx
| | ├ SpinnerBlock.tsx
| | ├ StatusCode.tsx
| | ├ Sticky.tsx
| | ├ TagItem.tsx
| | ├ TagList.tsx
| | ├ ToggleSwitch.tsx
| | ├ Typography.tsx
| | ├ UserProfile.tsx
| | ├ __tests__
| | | ├ PopupOKCancel.test.tsx
| | | ├ PostLink.test.tsx
| | | ├ RequireLogin.test.tsx
| | | ├ SelectableList.test.tsx
| | | ├ SorterButton.test.tsx
| | | ├ UserProfile.test.tsx
| | | └ __snapshots__
| | |   └ PopupOKCancel.test.tsx.snap
| | ├ atom-one-dark.css
| | └ atom-one-light.css
| ├ error
| | ├ ChunkErrorScreen.tsx
| | ├ CrashErrorScreen.tsx
| | ├ ErrorBoundary.tsx
| | ├ ErrorScreenTemplate.tsx
| | ├ NetworkErrorScreen.tsx
| | └ NotFoundError.tsx
| ├ home
| | ├ HomeLayout.tsx
| | ├ HomeMobileHeadExtra.tsx
| | ├ HomeNoticeWidget.tsx
| | ├ HomeRightFooter.tsx
| | ├ HomeSidebar.tsx
| | ├ HomeTab.tsx
| | ├ HomeTagWidget.tsx
| | ├ HomeWidget.tsx
| | ├ TimeframePicker.tsx
| | ├ hooks
| | | └ useTimeframe.ts
| | └ utils
| |   └ timeframeMap.ts
| ├ main
| | ├ MainPageTemplate.tsx
| | ├ MainResponsive.tsx
| | └ MainTemplate.tsx
| ├ policy
| | ├ PolicyViewer.tsx
| | └ policyData.ts
| ├ post
| | ├ LinkedPostItem.tsx
| | ├ LinkedPostList.tsx
| | ├ MobileLikeButton.tsx
| | ├ PostCommentItem.tsx
| | ├ PostCommentsList.tsx
| | ├ PostCommentsTemplate.tsx
| | ├ PostCommentsWrite.tsx
| | ├ PostContent.tsx
| | ├ PostHead.tsx
| | ├ PostHtmlContent.tsx
| | ├ PostLikeShareButtons.tsx
| | ├ PostReplies.tsx
| | ├ PostSeriesInfo.tsx
| | ├ PostSkeleton.tsx
| | ├ PostTags.tsx
| | ├ PostTemplate.tsx
| | ├ PostToc.tsx
| | ├ PostViewerProvider.tsx
| | └ __tests__
| |   ├ LinkedPostItem.test.tsx
| |   ├ LinkedPostList.test.tsx
| |   ├ MobileLikeButton.test.tsx
| |   ├ PostCommentItem.test.tsx
| |   ├ PostCommentList.test.tsx
| |   ├ PostCommentsTemplate.test.tsx
| |   ├ PostCommentsWrite.test.tsx
| |   ├ PostContent.test.tsx
| |   ├ PostHead.test.tsx
| |   ├ PostLikeShareButtons.test.tsx
| |   ├ PostReplies.test.tsx
| |   ├ PostSeriesInfo.test.tsx
| |   └ PostsTags.test.tsx
| ├ postStats
| | └ PostStats.tsx
| ├ readingList
| | └ ReadingListTab.tsx
| ├ register
| | ├ RegisterForm.tsx
| | ├ RegisterTemplate.tsx
| | └ __tests__
| |   ├ RegisterForm.test.tsx
| |   ├ RegisterTemplate.test.tsx
| |   └ __snapshots__
| |     ├ RegisterForm.test.tsx.snap
| |     └ RegisterTemplate.test.tsx.snap
| ├ saves
| | ├ SavedPostItem.tsx
| | ├ SavedPosts.tsx
| | ├ SavesTemplate.tsx
| | └ hooks
| |   └ useSavedPosts.ts
| ├ search
| | ├ SearchInput.tsx
| | ├ SearchResultInfo.tsx
| | ├ SearchTemplate.tsx
| | └ __tests__
| |   └ SearchInput.test.tsx
| ├ setting
| | ├ SettingEditButton.tsx
| | ├ SettingEmailRulesRow.tsx
| | ├ SettingInput.tsx
| | ├ SettingRow.tsx
| | ├ SettingRows.tsx
| | ├ SettingSocialInfoRow.tsx
| | ├ SettingTitleRow.tsx
| | ├ SettingUnregisterRow.tsx
| | ├ SettingUserProfile.tsx
| | └ __tests__
| |   └ SettingUserProfile.test.tsx
| ├ tags
| | ├ DetailedTagItem.tsx
| | ├ DetailedTagList.tsx
| | └ TagDetail.tsx
| ├ velog
| | ├ DragSample.tsx
| | ├ DraggableSeriesPostList.tsx
| | ├ SeriesActionButtons.tsx
| | ├ SeriesItem.tsx
| | ├ SeriesList.tsx
| | ├ SeriesPostItem.tsx
| | ├ SeriesPostList.tsx
| | ├ SeriesPostsTemplate.tsx
| | ├ SeriesSorterAligner.tsx
| | ├ SideArea.tsx
| | ├ UserTagHorizontalList.tsx
| | ├ UserTagVerticalList.tsx
| | ├ UserTags.tsx
| | ├ VelogAboutContent.tsx
| | ├ VelogAboutEdit.tsx
| | ├ VelogAboutRightButton.tsx
| | ├ VelogPageTemplate.tsx
| | ├ VelogResponsive.tsx
| | ├ VelogSearchInput.tsx
| | ├ VelogTab.tsx
| | ├ __tests__
| | | ├ SeriesActionButtons.test.tsx
| | | ├ SeriesItem.test.tsx
| | | ├ SeriesList.test.tsx
| | | ├ SeriesPostItem.test.tsx
| | | ├ SeriesPostList.test.tsx
| | | ├ SeriesPostsTemplate.test.tsx
| | | └ VelogAboutRightButton.test.tsx
| | └ hooks
| |   └ useUserTags.ts
| └ write
|   ├ AddLink.tsx
|   ├ AskChangeEditor.tsx
|   ├ EditorPanes.tsx
|   ├ MarkdownPreview.tsx
|   ├ PublishActionButtons.tsx
|   ├ PublishPreview.tsx
|   ├ PublishPrivacySetting.tsx
|   ├ PublishScreenTemplate.tsx
|   ├ PublishSection.tsx
|   ├ PublishSeriesConfigButtons.tsx
|   ├ PublishSeriesConfigTemplate.tsx
|   ├ PublishSeriesCreate.tsx
|   ├ PublishSeriesSection.tsx
|   ├ PublishURLSetting.tsx
|   ├ QuillEditor.tsx.temp
|   ├ TagInput.tsx
|   ├ TitleTextarea.tsx
|   ├ Toolbar.tsx
|   ├ WriteFooter.tsx
|   ├ WriteMarkdownEditor.tsx
|   └ __tests__
|     ├ AskChangeEditor.test.tsx
|     ├ EditorPanes.test.tsx
|     ├ MarkdownEditor.test.tsx
|     ├ MarkdownPreview.test.tsx
|     ├ PublishActionButtons.test.tsx
|     ├ PublishPreview.test.tsx
|     ├ PublishPrivacySetting.test.tsx
|     ├ PublishScreenTemplate.test.tsx
|     ├ PublishSection.test.tsx
|     ├ PublishSeriesConfigButtons.test.tsx
|     ├ PublishSeriesCreate.test.tsx
|     ├ PublishSeriesSection.test.tsx
|     ├ PublishURLSetting.test.tsx
|     ├ QuillEditor.test.tsx.temp
|     ├ TagInput.test.tsx
|     ├ Toolbar.test.tsx
|     ├ WriteFooter.test.tsx
|     └ __snapshots__
|       ├ AskChangeEditor.test.tsx.snap
|       ├ MarkdownEditor.test.tsx.snap
|       ├ MarkdownPreview.test.tsx.snap
|       ├ PublishActionButtons.test.tsx.snap
|       ├ PublishPreview.test.tsx.snap
|       ├ PublishPrivacySetting.test.tsx.snap
|       ├ PublishScreenTemplate.test.tsx.snap
|       ├ PublishSection.test.tsx.snap
|       ├ PublishURLSetting.test.tsx.snap
|       ├ TagInput.test.tsx.snap
|       ├ Toolbar.test.tsx.snap
|       └ WriteFooter.test.tsx.snap
├ containers
| ├ auth
| | ├ AuthModalContainer.tsx
| | └ __tests__
| |   ├ AuthModalContainer.test.tsx
| |   └ __snapshots__
| |     └ AuthModalContainer.test.tsx.snap
| ├ base
| | ├ CommonPopup.tsx
| | ├ Core.tsx
| | └ hooks
| |   ├ useCrisp.tsx
| |   └ useUserLoader.tsx
| ├ etc
| | └ EmailLogin.tsx
| ├ home
| | ├ MainNoticeWidgetContainer.tsx
| | └ MainTagWidgetContainer.tsx
| ├ post
| | ├ HorizontalAd.tsx
| | ├ PostComments.tsx
| | ├ PostCommentsWriteContainer.tsx
| | ├ PostEditComment.tsx
| | ├ PostRepliesContainer.tsx
| | ├ PostViewer.tsx
| | ├ RelatedPost.tsx
| | ├ RelatedPostAd.tsx
| | ├ RelatedPostsForGuest.tsx
| | └ __tests__
| |   ├ PostComments.test.tsx
| |   ├ PostCommentsWriteContainer.test.tsx
| |   └ PostViewer.test.tsx
| ├ register
| | └ RegisterFormContainer.tsx
| ├ search
| | ├ LargeSearchInput.tsx
| | └ SearchResult.tsx
| ├ setting
| | ├ SettingRowsContainer.tsx
| | ├ SettingUserProfileContainer.tsx
| | └ hooks
| |   ├ useUnregister.ts
| |   ├ useUpdateEmailRules.ts
| |   ├ useUpdateSocialInfo.ts
| |   ├ useUpdateThumbnail.ts
| |   ├ useUserProfile.ts
| |   └ useVelogConfig.ts
| ├ tags
| | ├ DetailedTagListContainer.tsx
| | └ TagDetailContainer.tsx
| ├ velog
| | ├ SeriesListContainer.tsx
| | ├ SeriesPosts.tsx
| | ├ UserPosts.tsx
| | ├ UserProfileContainer.tsx
| | ├ UserSearchedPosts.tsx
| | ├ VelogAbout.tsx
| | ├ VelogPageFallback.tsx
| | ├ VelogSearchInputContainer.tsx
| | ├ __tests__
| | | ├ SeriesListContainer.test.tsx
| | | ├ SeriesPosts.test.tsx
| | | └ UserProfileContainer.test.tsx
| | └ hooks
| |   └ useApplyVelogConfig.ts
| └ write
|   ├ ActiveEditor.tsx
|   ├ EditorPanesContainer.tsx
|   ├ MarkdownEditorContainer.tsx
|   ├ MarkdownPreviewContainer.tsx
|   ├ PublishActionButtonsContainer.tsx
|   ├ PublishPreviewContainer.tsx
|   ├ PublishPrivacySettingContainer.tsx
|   ├ PublishScreen.tsx
|   ├ PublishSeriesConfig.tsx
|   ├ PublishSeriesList.tsx
|   ├ PublishSeriesSectionContainer.tsx
|   ├ PublishSettings.tsx
|   ├ PublishURLSettingContainer.tsx
|   ├ QuillEditorContainer.tsx.temp
|   ├ TagInputContainer.tsx
|   ├ __tests__
|   | ├ ActiveEditor.test.tsx
|   | ├ MarkdownEditorContainer.test.tsx
|   | ├ PublishPreviewContainer.test.tsx
|   | ├ PublishPrivacySettingContainer.test.tsx
|   | ├ PublishScreen.test.tsx
|   | ├ PublishSeriesSectionContainer.test.tsx
|   | ├ PublishURLSettingContainer.test.tsx
|   | ├ QuillEditorContainer.test.tsx.temp
|   | ├ TagInputContainer.test.tsx
|   | └ __snapshots__
|   |   ├ ActiveEditor.test.tsx.snap
|   |   └ TagInputContainer.test.tsx.snap
|   └ hooks
|     └ useSaveHotkey.ts
├ index.css
├ index.server.ts
├ index.tsx
├ lib
| ├ __tests__
| | └ utils.test.ts
| ├ api
| | ├ apiClient.ts
| | ├ auth.ts
| | └ files.ts
| ├ convertToMarkdown.ts.temp
| ├ crisp.ts
| ├ detectIOS.ts
| ├ graphql
| | ├ UncachedApolloContext.tsx
| | ├ __data__
| | | ├ post.data.ts
| | | ├ series.data.ts
| | | └ user.data.ts
| | ├ client.ts
| | ├ post.ts
| | ├ series.ts
| | ├ tags.ts
| | ├ types.d.ts
| | └ user.ts
| ├ gtag.ts
| ├ heading.ts
| ├ hooks
| | ├ useBoolean.tsx
| | ├ useCFUpload.ts
| | ├ useDidMount.ts
| | ├ useInput.tsx
| | ├ useInputs.tsx
| | ├ useMounted.ts
| | ├ useNotFound.ts
| | ├ usePopup.tsx
| | ├ usePrefetchPost.ts
| | ├ usePreserveScroll.ts
| | ├ useRequest.tsx
| | ├ useRequireLogin.ts
| | ├ useS3Upload.tsx
| | ├ useScrollPagination.ts
| | ├ useTheme.ts
| | ├ useToggle.tsx
| | ├ useUpload.tsx
| | └ useUser.tsx
| ├ jazzbar
| | ├ Jazzbar.css
| | ├ Jazzbar.tsx
| | ├ JazzbarContext.tsx
| | ├ index.tsx
| | └ useJazzbar.tsx
| ├ katexWhitelist.ts
| ├ optimizeImage.ts
| ├ quill
| | └ markdownShortcuts
| |   ├ formats
| |   | └ hr.js
| |   └ index.js
| ├ remark
| | ├ embedPlugin.ts
| | └ prismPlugin.js
| ├ renderWithApollo.tsx
| ├ renderWithProviders.tsx
| ├ renderWithRedux.tsx
| ├ replacedModule.ts
| ├ share.ts
| ├ storage.ts
| ├ styles
| | ├ media.ts
| | ├ palette.ts
| | ├ postStyles.ts
| | ├ prismThemes.ts
| | ├ responsive.ts
| | ├ themes.ts
| | ├ transitions.ts
| | ├ utils.ts
| | └ zIndexes.ts
| ├ utils.ts
| └ waitUntil.ts
├ logo copy.svg
├ logo.svg
├ modules
| ├ __tests__
| | ├ core.test.ts
| | ├ header.test.ts
| | ├ post.test.ts
| | └ write.test.ts
| ├ core
| | ├ actions.ts
| | ├ index.ts
| | ├ reducer.ts
| | └ types.ts
| ├ darkMode.ts
| ├ error.ts
| ├ header.ts
| ├ home.ts
| ├ index.ts
| ├ post.ts
| ├ scroll.ts
| └ write.ts
├ pages
| ├ EmailLoginPage.tsx
| ├ NotFoundPage.tsx
| ├ PolicyPage.tsx
| ├ PostStatsPage.tsx
| ├ RegisterPage.tsx
| ├ SavesPage.tsx
| ├ SearchPage.tsx
| ├ SettingPage.tsx
| ├ SuccessPage.tsx
| ├ WritePage.tsx
| ├ home
| | ├ HomePage.tsx
| | ├ RecentPostsPage.tsx
| | ├ TrendingPostsPage.tsx
| | └ hooks
| |   ├ useRecentPosts.ts
| |   └ useTrendingPosts.ts
| ├ readingList
| | ├ ReadingListPage.tsx
| | └ hooks
| |   └ useReadingList.ts
| ├ tags
| | ├ TagDetailPage.tsx
| | ├ TagListPage.tsx
| | └ TagsPage.tsx
| └ velog
|   ├ PostPage.tsx
|   ├ SeriesPage.tsx
|   ├ UserPage.tsx
|   ├ VelogPage.tsx
|   └ tabs
|     ├ AboutTab.tsx
|     ├ SeriesTab.tsx
|     └ UserPostsTab.tsx
├ react-app-env.d.ts
├ server
| ├ CacheManager.ts
| ├ Html.tsx
| ├ checkCacheRule.ts
| ├ serverRender.tsx
| └ ssrMiddleware.ts
├ serverless.ts
├ serviceWorker.ts
├ setupTests.ts
├ static
| ├ images
| | ├ empty-thumbnail.svg
| | ├ index.ts
| | ├ pluto-welcome.png
| | ├ series-thumbnail.svg
| | ├ undraw_blank_canvas_3rbb.svg
| | ├ undraw_bug_fixing_oc7a.svg
| | ├ undraw_empty.svg
| | ├ undraw_joyride_hnno.svg
| | ├ undraw_login_v483.svg
| | ├ undraw_page_not_found_su7k.svg
| | ├ undraw_searching.svg
| | ├ undraw_server_down_s4lk.svg
| | ├ undraw_update_uxn2.svg
| | └ user-thumbnail.png
| └ svg
|   ├ icon-add-list.svg
|   ├ icon-check.svg
|   ├ icon-clip.svg
|   ├ icon-email.svg
|   ├ icon-facebook-square.svg
|   ├ icon-facebook.svg
|   ├ icon-github.svg
|   ├ icon-globe.svg
|   ├ icon-google.svg
|   ├ icon-like.svg
|   ├ icon-lock.svg
|   ├ icon-minus-box.svg
|   ├ icon-moon.svg
|   ├ icon-plus-box.svg
|   ├ icon-search-2.svg
|   ├ icon-search.svg
|   ├ icon-share-2.svg
|   ├ icon-share.svg
|   ├ icon-sun.svg
|   ├ icon-twitter.svg
|   ├ image-series.svg
|   ├ index.ts
|   ├ logo.svg
|   ├ vector-image.svg
|   └ velog-icon.svg
├ types
| ├ missingTypes.d.ts
| └ window.d.ts
└ typography.css