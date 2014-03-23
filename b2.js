// Made By Crazy4Redstone!!!

// Recipes:



// Blocks:

Block.defineBlock (55,"Redstone_Off",[["redstone_dust_cross",0]],19,false,13)
Block.setShape (55,0,0,0,1,1/16,1)
Block.setDestroyTime (55,0.01)
Block.setColor (55,[0x440000])
Block.setRenderLayer (55,2)

Block.defineBlock (23,"Redstone_Off",[["redstone_dust_cross",0]],19,false,13)
Block.setShape (23,0,0,0,1,1/16,1)
Block.setDestroyTime (23,0.01)
Block.setColor (23,[0xFD0000])
Block.setRenderLayer (23,2)

Block.defineBlock (69,"Lever",[["lever",0]],19,false,1)
Block.setDestroyTime (69,0.01)
Block.setRenderLayer (69,1)

Block.defineBlock (77,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (77,0,0.38,0.31,0.12,0.62,0.69)
Block.setRenderLayer (77,1)

Block.defineBlock (90,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (90,0.88,0.38,0.31,1,0.62,0.69)
Block.setRenderLayer (90,2)

Block.defineBlock (93,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (93,0.31,0.38,0,0.69,0.62,0.12)
Block.setRenderLayer (93,2)

Block.defineBlock (94,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (94,0.31,0.38,0.88,0.69,0.62,1)
Block.setRenderLayer (94,2)

// Functions:

function useItem (x,y,z,itemId,blockId,side)
{
  var D = Level.getData (x,y,z)
  if (blockId == 69 && D == 0)
  {
    setTile (x,y,z,69,1)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    TestDust (x,y-2,z,true)
  }
  if (blockId == 69 && D == 1)
  {
    setTile (x,y,z,69,0)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
    TestDust (x,y-2,z,false)
  }
  if (blockId == 77 && D == 0)
  {
    setTile (x,y,z,77,1)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    TestDust (x,y-2,z,true)
    setTile (x,y,z,77,0)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
    TestDust (x,y-2,z,false)
  }
  if (blockId == 90 && D == 0)
  {
    setTile (x,y,z,90,1)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    TestDust (x,y-2,z,true)
    setTile (x,y,z,90,0)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
    TestDust (x,y-2,z,false)
  }
  if (blockId == 93 && D == 0)
  {
    setTile (x,y,z,93,1)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    TestDust (x,y-2,z,true)
    setTile (x,y,z,93,0)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
    TestDust (x,y-2,z,false)
  }
  if (blockId == 94 && D == 0)
  {
    setTile (x,y,z,94,1)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    TestDust (x,y-2,z,true)
    setTile (x,y,z,94,0)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
    TestDust (x,y-2,z,false)
  }
  if (itemId == 77 && side == 1)
  {
    setTile (x,y+1,z,0)
    preventDefault ()
  }
  if (itemId == 77 && side == 2)
  {
    setTile (x,y,z-1,94)
  }
  if (itemId == 77 && side == 3)
  {
    setTile (x,y,z+1,93)
  }
  if (itemId == 77 && side == 4)
  {
    setTile (x-1,y,z,90)
  }
  if (itemId == 77 && side == 5)
  {
    setTile (x+1,y,z,77)
  }
  if (itemId == 77 && side == 6)
  {
    setTile (x,y-1,z,0)
    preventDefault ()
  }
}
function TestDust (x,y,z,mode)
{
  if (getTile (x,y,z) == 55 && mode)
  {
    setTile (x,y,z,23)
    TestDust (x-1,y,z,true)
    TestDust (x+1,y,z,true)
    TestDust (x,y,z-1,true)
    TestDust (x,y,z+1,true)
    checkTnt (x+1,y-1,z)
    checkTnt (x-1,y-1,z)
    checkTnt (x,y-1,z+1)
    checkTnt (x,y-1,z-1)
    checkTnt (x+1,y,z)
    checkTnt (x-1,y,z)
    checkTnt (x,y,z+1)
    checkTnt (x,y,z-1)
    checkTnt (x,y-2,z)
  }
  if (getTile (x,y,z) == 23 && !mode)
  {
    setTile (x,y,z,55)
    TestDust (x-1,y,z,false)
    TestDust (x+1,y,z,false)
    TestDust (x,y,z-1,false)
    TestDust (x,y,z+1,false)
  }
}  
function checkTnt (x,y,z)
{
  if (getTile (x,y,z) == 46)
  {
    setTile (x,y,z,0)
    Level.spawnMob (x+0.5, y+0.5, z+0.5, 65, "mob/cow.png")
  }
}
function procCmd (c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'give': {
            if(p[1] > 0) {
                Entity.setCarriedItem(getPlayerEnt(),p[1],1,p[2]);
            }
        }
    }
}	
	
