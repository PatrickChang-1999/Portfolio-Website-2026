# About portrait space

The About page has a recessed 4:5 portrait frame beside the biography, above it on mobile. It shows the grained 0205 initials placeholder until a headshot loads successfully. Biography text, education, and the frame design are unchanged.

## Upload through GitHub

Upload an actual JPEG named `headshot.jpg` to the existing `dist/assets/profile/` folder, commit it, and deploy that source. The folder README includes the instructions. No source-code edits or upload through chat are required. Deploy the committed source through your configured static host; the image upload does not configure hosting by itself.

`dist/about-portrait.js` reads the relative path from the frame’s `data-headshot-src` attribute. It loads the image off-screen and replaces the placeholder only after a successful image load. A missing or invalid file leaves the placeholder visible, without a broken image. With JavaScript disabled, the placeholder remains. The relative path works when deployed beneath a repository subpath.

The existing CSS uses `object-fit: cover` and `object-position: center 35%`. Only adjust the latter if a later photo needs a different crop. The image fills the existing frame without changing layout.

Verified in the browser: a missing image retains the placeholder; a valid local JPEG replaces it with the correct alt text; an invalid image retains the placeholder. All three states kept the same 280 × 350px desktop frame. Temporary test images were removed before packaging.
