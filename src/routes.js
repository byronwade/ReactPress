import React from "react";
import { Routes, Route } from "react-router-dom";
import RPAdmin from "./np-admin/app";

//Dashboard Main Components
import Index from "./np-admin/index";
import Update from "./np-admin/update-core";
import About from "./np-admin/about";

// Edit is for all post types displayed threw table
import Edit from "./np-admin/edit"; // will need to break this out into more components later (edit.php displays table for all post types)

// Posts
import PostNew from "./np-admin/post-new"; // will need to break this out into more components later (All post types including pages)
import EditTags from "./np-admin/edit-tags"; // will need to break this out into more components later (All taxonomy)

// Media
import Upload from "./np-admin/upload"; // I need to fix how the menu header is displaying
import MediaNew from "./np-admin/media-new";

//Comments
import EditComments from "./np-admin/edit-comments";

// //Appearance - We are skipping the customize.php until we have a plan on how to handle themes in react
// import Themes from "./np-admin/themes"; // Dont forget the layout changes when there is more then one theme
// import NavMenus from "./np-admin/nav-menus"; //menu structure is buggy, will probably remove it until I get some react drag and drop added
// import ThemeEditor from "./np-admin/theme-editor";

// // Plugins
// import Plugins from "./np-admin/plugins";
// import PluginInstall from "./np-admin/plugin-install"; // plugin tags acting alittle funky
// import PluginEditor from "./np-admin/plugin-editor";

// Users
import Users from "./np-admin/users";
import UserNew from "./np-admin/user-new";
import Profile from "./np-admin/profile";

// Tools
import Tools from "./np-admin/tools";
import Import from "./np-admin/import";
import Export from "./np-admin/export";
import SiteHealth from "./np-admin/site-health";
import ExportPersonalData from "./np-admin/export-personal-data";
import ErasePersonalData from "./np-admin/erase-personal-data";

// Settings
import OptionsGeneral from "./np-admin/options-general";
import OptionsWriting from "./np-admin/options-writing";
import OptionsReading from "./np-admin/options-reading";
import OptionsDiscussion from "./np-admin/options-discussion";
import OptionsMedia from "./np-admin/options-media";
import OptionsPermalink from "./np-admin/options-permalink";
import OptionsPrivacy from "./np-admin/options-privacy";

//Login
import Login from "./np-admin/login";
import ForgotPassword from "./np-admin/forgot-password";
import { InstallStep1, InstallStep2, InstallSuccess, InstalledAlready } from "./np-admin/Install/install";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RPAdmin />}>
				<Route path="/" element={<Index />} exact />
				<Route path="/updates" element={<Update />} />
				<Route path="/about" element={<About />} />
				<Route path="/edit/posts" element={<Edit />} />
				<Route path="/post-new/posts" element={<PostNew />} />
				<Route path="/post-new/category" element={<EditTags />} />
				<Route path="/post-new/tags" element={<EditTags />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/media-new" element={<MediaNew />} />
				<Route path="/edit/pages" element={<Edit />} />
				<Route path="/post-new/pages" element={<PostNew />} />
				<Route path="/edit-comments" element={<EditComments />} />
				<Route path="/users" element={<Users />} />
				<Route path="/user-new" element={<UserNew />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/tools" element={<Tools />} />
				<Route path="/import" element={<Import />} />
				<Route path="/export" element={<Export />} />
				<Route path="/site-health" element={<SiteHealth />} />
				<Route path="/export-personal-data" element={<ExportPersonalData />} />
				<Route path="/erase-personal-data" element={<ErasePersonalData />} />
				<Route path="/options-general" element={<OptionsGeneral />} />
				<Route path="/options-writing" element={<OptionsWriting />} />
				<Route path="/options-reading" element={<OptionsReading />} />
				<Route path="/options-discussion" element={<OptionsDiscussion />} />
				<Route path="/options-media" element={<OptionsMedia />} />
				<Route path="/options-permalink" element={<OptionsPermalink />} />
				<Route path="/options-privacy" element={<OptionsPrivacy />} />
			</Route>
			<Route path="/install" exact element={<InstallStep1 />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
		</Routes>
	);
};

export default AllRoutes;
