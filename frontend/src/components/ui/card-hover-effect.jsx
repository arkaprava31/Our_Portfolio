/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../libs/utils";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { MdCancel } from "react-icons/md";


export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [open, setOpen] = useState(false);
  let [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
        {items.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClickOpen(item)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#13132E] dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal to show the card content */}
      <Dialog open={open} handler={handleClose} size="sm" className="bg-gradient-to-r to-[#0f0f26] from-[#0a0a11] border border-[#13132E] rounded-xl shadow-xl  text-white h-[400px] overflow-y-scroll custom-scrollbar">
        <DialogHeader className="flex justify-between items-center text-white">
          {selectedItem?.title}
          <IconButton variant="text" color="blue-gray" onClick={handleClose}>
            <MdCancel className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <Card>
            <CardTitle>{selectedItem?.title}</CardTitle>
            <CardDescription>{selectedItem?.description}</CardDescription>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
