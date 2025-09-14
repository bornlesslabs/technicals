import React from 'react'

// Figma-provided asset constants (localhost preview server)
const imgWorkOnHover = 'http://localhost:3845/assets/8d354a46bd8850c50c0f1bf0a8ff2b424a977624.svg'
const imgCodeOnHover = 'http://localhost:3845/assets/30f84ffef5d716c563fa7d8aa32b226c6cb5c983.svg'
const imgWritingOnHover = 'http://localhost:3845/assets/bc5b762f0c14e340d6188d73c2bb59f2f639c05d.svg'
const imgDesignOnHover = 'http://localhost:3845/assets/62a72c026e4516b433c84e4ee774d506693b64c4.svg'
const imgContactOnHover = 'http://localhost:3845/assets/091130bdf13df74aedbcc3d08d5e539fce2d03f7.svg'

export default function Sidebar() {
  return (
    <aside className="relative w-full h-screen bg-[#f9f908]" data-name="sidebar" data-node-id="58:113">
      <div className="absolute inset-0 max-w-[545px]">
        <div className="absolute left-3 top-44 w-[366px]">
          <h2 className="text-black text-6xl">work</h2>
        </div>

        <div className="absolute left-[172px] top-[450px] w-[185px]">
          <img src={imgCodeOnHover} alt="code hover" />
        </div>

        <div className="absolute left-3 top-[358px] w-80">
          <h3 className="text-black text-6xl">code</h3>
        </div>

        <div className="absolute left-[167px] top-[661px] w-[270px]">
          <img src={imgWritingOnHover} alt="writing hover" />
        </div>

        <div className="absolute left-3 top-[566px] w-[516px]">
          <h3 className="text-black text-6xl">writing</h3>
        </div>

        <div className="absolute left-[173px] top-[830px] w-[249px]">
          <img src={imgDesignOnHover} alt="design hover" />
        </div>

        <div className="absolute left-3 top-[774px] w-[452px]">
          <h3 className="text-black text-6xl">design</h3>
        </div>

        <div className="absolute left-[158px] top-[1007px] w-[270px]">
          <img src={imgContactOnHover} alt="contact hover" />
        </div>

        <div className="absolute left-3 top-0 w-[402px]"><h3 className="text-black text-6xl">menu</h3></div>
      </div>
    </aside>
  )
}
