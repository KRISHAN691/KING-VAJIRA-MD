/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
                                                                                                     
                                  ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   
                                                                                                     
                                           Ｖ：１．０．１                                                
                                                                                                     
              ██╗   ██╗ █████╗       ██╗██╗██████╗   █████╗         ███╗   ███╗██████╗ 
              ██║   ██║██╔══██╗      ██║██║██╔══██╗██╔══██╗        ████╗ ████║██╔══██╗
              ██║   ██║███████║      ██║██║██████╔╝███████║ █████╗██╔████╔██║██║  ██║
              ╚██╗ ██╔╝██╔══██║██   ██║██║██╔══██╗██╔══██║ ╚════╝██║╚██╔╝██║██║  ██║
               ╚████╔╝ ██║  ██║╚█████╔╝██║██║  ██║██║   ██║        ██║ ╚═╝ ██║██████╔╝
                ╚═══╝  ╚═╝  ╚═╝ ╚════╝ ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝        ╚═╝     ╚═╝╚═════╝                         
                                                                                                     
                                                                                                  
                                                                                                    
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Vajira-Md
   * @author : Vajira Tech Info
   * @youtube : https://youtube.com/@gamingewingyt6216
   * @description : Vajira-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Vajira Tech Info.
   * © 2023 Vajira-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
const { smd,getBuffer, lang, botpic,photoEditor, prefix, Config } = require('../lib')

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
const {TelegraPh} = require('../lib/scraper')



let cap =  Config.caption || "";


smd({ pattern: "ad", category: "editor",react: "✅", filename: __filename,  desc: "add view pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "jail", category: "editor",react: "✅", filename: __filename,  desc: "jail pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "uncover", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "clown", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "mnm", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "pet", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "greyscale", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "invert", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "blur", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//============================================================================
smd({ pattern: "drip", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "colorify", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "gun", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
smd({ pattern: "wanted", category: "editor",react: "✅", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
