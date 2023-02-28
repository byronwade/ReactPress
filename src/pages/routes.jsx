import React from "react";
import { Routes, Route } from "react-router-dom";
import RPAdmin from "./app";

//Dashboard Main Components
import Index from "./Dashboard/Index/Index";
import Update from "./Dashboard/Update/Update";
import About from "./Dashboard/About/About";

// Edit is for all post types displayed threw table
import Edit from "./Content/edit"; // will need to break this out into more components later (edit.php displays table for all post types)
import PostNew from "./Content/post-new"; // will need to break this out into more components later (All post types including pages)
import EditTags from "./Content/edit-tags"; // will need to break this out into more components later (All taxonomy)

// Media
import Upload from "./Media/upload"; // I need to fix how the menu header is displaying
import MediaNew from "./Media/media-new";

//Comments
import EditComments from "./Comments/edit-comments";

// //Appearance - We are skipping the customize.php until we have a plan on how to handle themes in react
// import Themes from "./pages/themes"; // Dont forget the layout changes when there is more then one theme
// import NavMenus from "./pages/nav-menus"; //menu structure is buggy, will probably remove it until I get some react drag and drop added
// import ThemeEditor from "./pages/theme-editor";

// // Plugins
// import Plugins from "./pages/plugins";
// import PluginInstall from "./pages/plugin-install"; // plugin tags acting alittle funky
// import PluginEditor from "./pages/plugin-editor";

// Users
import Users from "./Users/users";
import UserNew from "./Users/user-new";
import Profile from "./Users/profile";

// Tools
import Tools from "./Tools/tools";
import Import from "./Tools/import";
import Export from "./Tools/export";
import SiteHealth from "./Tools/site-health";
import ExportPersonalData from "./Tools/export-personal-data";
import ErasePersonalData from "./Tools/erase-personal-data";

// Settings
import OptionsGeneral from "./Settings/options-general";
import OptionsWriting from "./Settings/options-writing";
import OptionsReading from "./Settings/options-reading";
import OptionsDiscussion from "./Settings/options-discussion";
import OptionsMedia from "./Settings/options-media";
import OptionsPermalink from "./Settings/options-permalink";
import OptionsPrivacy from "./Settings/options-privacy";

//Login
import { Login, ForgotPassword } from "./Login/login";
import { InstallStep1, InstallStep2, InstallSuccess, InstalledAlready } from "./Install/install";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RPAdmin />}>
				<Route path="/" element={<Index />} />
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
			<Route path="/install" element={<InstallStep1 />} />
			<Route path="/install" element={<InstallStep2 />} />
			<Route path="/install" element={<InstallSuccess />} />
			<Route path="/install" element={<InstalledAlready />} />
			<Route path="/login" element={<Login />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
		</Routes>
	);
};

export default AllRoutes;
